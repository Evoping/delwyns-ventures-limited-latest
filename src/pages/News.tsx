import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag, Megaphone, FileText, TrendingUp, Shield, Camera, Lock } from "lucide-react";

const announcements = [
  {
    type: "announcement",
    title: "New CCTV Packages for Schools 2026",
    date: "January 15, 2026",
    excerpt:
      "We're excited to announce affordable CCTV and security packages tailored specifically for educational institutions. Includes remote monitoring and maintenance support.",
    icon: Camera,
  },
  {
    type: "tender",
    title: "Security System Upgrade Services",
    date: "January 10, 2026",
    excerpt:
      "Offering comprehensive security system upgrades for businesses and residential estates. Contact us for a free site assessment and quotation.",
    icon: Shield,
  },
];

const blogPosts = [
  {
    title: "5 Essential CCTV Features for Modern Schools",
    date: "January 12, 2026",
    category: "Security",
    icon: Camera,
    excerpt:
      "From HD resolution to remote access, discover the must-have features when installing a CCTV system in educational institutions.",
  },
  {
    title: "Why Access Control Systems Are Critical for Business Security",
    date: "January 8, 2026",
    category: "Access Control",
    icon: Lock,
    excerpt:
      "Biometric and RFID systems do more than restrict entry—they integrate with HR, track attendance, and enhance overall security.",
  },
  {
    title: "Choosing Between Cloud and Local DVR Storage for CCTV",
    date: "December 20, 2025",
    category: "Technical",
    icon: Shield,
    excerpt:
      "We break down the pros and cons of cloud-based vs local NVR/DVR storage solutions for your surveillance needs.",
  },
  {
    title: "Alarm Systems: Motion Sensors vs Glass-Break Detectors",
    date: "December 15, 2025",
    category: "Alarms",
    icon: Shield,
    excerpt:
      "Understanding the different types of intrusion detection and how to layer them for maximum protection.",
  },
];

const successStories = [
  {
    title: "School Campus Achieves 100% Security Coverage",
    date: "January 5, 2026",
    excerpt:
      "A local secondary school now has complete perimeter surveillance with 24/7 remote monitoring and integrated access control at all entry points.",
  },
  {
    title: "Manufacturing SME Reduces Theft by 90%",
    date: "December 10, 2025",
    excerpt:
      "After installing our comprehensive CCTV and alarm system, a local manufacturer saw dramatic improvements in asset security and staff accountability.",
  },
];

const News = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              News & Updates
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Security Insights & Updates
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              The latest in CCTV, access control, alarm systems, and security best practices from Delwyns Ventures Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 bg-accent/5">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Megaphone className="w-6 h-6 text-accent" />
            Latest Announcements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {announcements.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2 block">
                Insights
              </span>
              <h2 className="text-3xl font-bold text-foreground">Security Tips & Guides</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="bg-card rounded-xl overflow-hidden shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <post.icon className="w-16 h-16 text-primary/30 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-secondary text-sm font-medium flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Success Stories
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Real Results</h2>
            <p className="text-muted-foreground text-lg">
              See how our security solutions have made a difference for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story) => (
              <div
                key={story.title}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50"
              >
                <span className="text-muted-foreground text-sm flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4" />
                  {story.date}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-3">{story.title}</h3>
                <p className="text-muted-foreground text-sm">{story.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need a Security Consultation?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free site assessment and quotation for your CCTV, access control, or alarm system needs.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact" className="gap-2">
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default News;
