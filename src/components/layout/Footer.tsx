import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, MessageCircle, Code } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
  ],
  services: [
    { label: "ICT Consultancy", href: "/services#consultancy" },
    { label: "Training Programs", href: "/services#training" },
    { label: "Digital Solutions", href: "/services#digital" },
    { label: "Procurement", href: "/services#procurement" },
  ],
};

// WhatsApp Web fallback - works on both mobile and desktop
const getWhatsAppLink = (phone: string) => {
  return `https://web.whatsapp.com/send?phone=${phone}`;
};

export function Footer() {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phone = "254705430417";
    // Try WhatsApp app first, fallback to web
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `https://api.whatsapp.com/send?phone=${phone}`
      : `https://web.whatsapp.com/send?phone=${phone}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Main Footer */}
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20 group-hover:bg-primary-foreground/20 transition-colors">
                <span className="text-primary-foreground font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">Delwyns Ventures</span>
                <span className="text-sm text-primary-foreground/60">Ltd</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Empowering businesses, schools, and communities through innovative ICT solutions. Your trusted partner in digital transformation across Africa.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground/80">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground/80">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground/80">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/60 text-sm">
                  Parklands, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
              <a
                  href="mailto:info@delywnsventuresltd.com"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  info@delywnsventuresltd.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a
                  href="tel:+254705430417"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  +254 705 430 417
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-accent shrink-0" />
                <button
                  onClick={handleWhatsAppClick}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm text-left"
                >
                  WhatsApp Support
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Delwyns Ventures Ltd. All rights reserved.
          </p>
          
          {/* Powered By Delywns IT Hub */}
          <div className="flex items-center gap-2 text-primary-foreground/40 text-sm">
            <Code size={14} className="text-accent" />
            <span>Powered by</span>
            <a 
              href="https://zynavo.co.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              Delywns IT Hub
            </a>
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
