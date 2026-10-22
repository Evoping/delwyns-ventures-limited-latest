import os
import sqlite3
import datetime
import click
from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML
from tabulate import tabulate

DB_FILE = "database.db"
OUTPUT_DIR = "invoices_output"

# Standard Company Info
COMPANY = {
    "name": "Delwyns Ventures Ltd",
    "short_name": "Delwyns IT HUB",
    "tagline": "Delwyns IT HUB — Integrated Technology & Security Solutions",
    "email": "info@delywnsventuresltd.com",
    "phone": "+254 728 090 115",
    "location": "Nairobi / Central Region, Kenya",
    "bank_name": "Equity Bank Kenya",
    "bank_acc_name": "Delwyns Ventures Ltd",
    "bank_acc_num": "0123456789012",
    "mpesa": "Business No: 400200 | Acc: 0110123456"
}

def get_db():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Initializes the SQLite database tables."""
    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS clients (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                attention TEXT,
                location TEXT
            )
        """)
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS invoices (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                invoice_num TEXT UNIQUE NOT NULL,
                client_id INTEGER,
                issue_date TEXT,
                due_date TEXT,
                project_title TEXT,
                project_scope TEXT,
                status TEXT DEFAULT 'PAYMENT DUE',
                FOREIGN KEY (client_id) REFERENCES clients (id)
            )
        """)
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS invoice_items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                invoice_id INTEGER,
                title TEXT,
                subtext TEXT,
                qty INTEGER,
                unit_price REAL,
                FOREIGN KEY (invoice_id) REFERENCES invoices (id)
            )
        """)
        conn.commit()

@click.group()
def cli():
    """Delwyns IT HUB — Invoicing System CLI"""
    init_db()
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

@cli.command()
@click.option("--name", prompt="Client Name", help="Name of the client or institution")
@click.option("--attention", prompt="Attention / Department", default="Accounts Payable", help="Contact department")
@click.option("--location", prompt="Location", default="Nairobi, Kenya", help="Client physical address")
def add_client(name, attention, location):
    """Add a new client to the database."""
    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO clients (name, attention, location) VALUES (?, ?, ?)",
                       (name, attention, location))
        conn.commit()
        click.echo(click.style(f"Client '{name}' successfully added!", fg="green"))

@cli.command()
def list_clients():
    """List all registered clients."""
    with get_db() as conn:
        clients = conn.execute("SELECT * FROM clients").fetchall()
        if not clients:
            click.echo("No clients found.")
            return
        table = [[c['id'], c['name'], c['attention'], c['location']] for c in clients]
        click.echo(tabulate(table, headers=["ID", "Client Name", "Attention", "Location"], tablefmt="grid"))

@cli.command()
def create_invoice():
    """Interactive wizard to create and generate an invoice PDF."""
    with get_db() as conn:
        clients = conn.execute("SELECT * FROM clients").fetchall()
        if not clients:
            click.echo(click.style("No clients found! Please add a client first using 'add-client'.", fg="red"))
            return

        click.echo("\n--- Select Client ---")
        for c in clients:
            click.echo(f"[{c['id']}] {c['name']}")
        client_id = click.prompt("Enter Client ID", type=int)

        # Generate default invoice number
        year = datetime.datetime.now().year
        count = conn.execute("SELECT COUNT(*) FROM invoices").fetchone()[0] + 1
        default_inv_num = f"DVT-{year}-{count:04d}"

        invoice_num = click.prompt("Invoice Number", default=default_inv_num)
        issue_date = click.prompt("Issue Date", default=datetime.datetime.now().strftime("%Y-%m-%d"))
        due_date = click.prompt("Due Date", default=(datetime.datetime.now() + datetime.timedelta(days=14)).strftime("%Y-%m-%d"))
        project_title = click.prompt("Project Title", default="CCTV Maintenance & Network Servicing")
        project_scope = click.prompt("Scope Summary", default="Hardware Replacement & Cable Repair")

        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO invoices (invoice_num, client_id, issue_date, due_date, project_title, project_scope)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (invoice_num, client_id, issue_date, due_date, project_title, project_scope))
        invoice_id = cursor.lastrowid

        # Add Items Loop
        click.echo("\n--- Add Invoice Line Items ---")
        while True:
            title = click.prompt("Item Title")
            subtext = click.prompt("Item Subtext / Specification", default="")
            qty = click.prompt("Quantity", type=int, default=1)
            unit_price = click.prompt("Unit Price (KES)", type=float)

            cursor.execute("""
                INSERT INTO invoice_items (invoice_id, title, subtext, qty, unit_price)
                VALUES (?, ?, ?, ?, ?)
            """, (invoice_id, title, subtext, qty, unit_price))

            if not click.confirm("Add another item?", default=False):
                break

        conn.commit()
        click.echo(click.style(f"\nInvoice {invoice_num} saved to database!", fg="green"))

        # Render PDF
        render_pdf(invoice_id)

def render_pdf(invoice_id):
    """Renders the HTML template and outputs a PDF file using WeasyPrint."""
    with get_db() as conn:
        inv = conn.execute("SELECT * FROM invoices WHERE id = ?", (invoice_id,)).fetchone()
        client = conn.execute("SELECT * FROM clients WHERE id = ?", (inv['client_id'],)).fetchone()
        items = conn.execute("SELECT * FROM invoice_items WHERE invoice_id = ?", (invoice_id,)).fetchall()

    items_list = [dict(item) for item in items]
    subtotal = sum(item['qty'] * item['unit_price'] for item in items_list)
    tax = 0.00
    grand_total = subtotal + tax

    env = Environment(loader=FileSystemLoader("templates"))
    template = env.get_template("invoice_template.html")

    rendered_html = template.render(
        company=COMPANY,
        invoice=dict(inv),
        client=dict(client),
        project={
            "title": inv['project_title'],
            "scope": inv['project_scope'],
            "lead": "Senior Network & Security Engineer"
        },
        items=items_list,
        totals={
            "subtotal": subtotal,
            "tax": tax,
            "grand_total": grand_total
        }
    )

    filename = f"{inv['invoice_num']}_{client['name'].replace(' ', '_')}.pdf"
    filepath = os.path.join(OUTPUT_DIR, filename)

    HTML(string=rendered_html).write_pdf(filepath)
    click.echo(click.style(f"Generated PDF Invoice: {filepath}", fg="cyan", bold=True))

@cli.command()
def list_invoices():
    """List all created invoices."""
    with get_db() as conn:
        invoices = conn.execute("""
            SELECT i.id, i.invoice_num, c.name as client_name, i.issue_date, i.status 
            FROM invoices i 
            JOIN clients c ON i.client_id = c.id
        """).fetchall()

        if not invoices:
            click.echo("No invoices found.")
            return

        table = [[i['id'], i['invoice_num'], i['client_name'], i['issue_date'], i['status']] for i in invoices]
        click.echo(tabulate(table, headers=["ID", "Invoice No", "Client", "Issue Date", "Status"], tablefmt="grid"))

@cli.command()
@click.option("--id", prompt="Invoice ID to compile", type=int)
def compile_pdf(id):
    """Re-compile a PDF for an existing invoice ID."""
    render_pdf(id)

if __name__ == "__main__":
    cli()
