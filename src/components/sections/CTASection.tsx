import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import codeSecurityVideo from "@/assets/code-security-video.mp4";

export const CTASection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phone = "254705430417";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `https://api.whatsapp.com/send?phone=${phone}`
      : `https://web.whatsapp.com/send?phone=${phone}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="relative rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          >
            <source src={codeSecurityVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/85 rounded-3xl" />

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-4 h-4 bg-accent/60 rounded-full animate-float" />
            <div className="absolute top-20 right-20 w-3 h-3 bg-secondary/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-10 left-1/4 w-5 h-5 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
            <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary-foreground/40 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary-foreground/20 animate-fade-up">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                AI-Powered Solutions
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Ready to Transform{" "}
              <span className="text-gradient">Your Organization?</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Let's discuss how Delwyns Ventures can help you achieve your digital transformation goals. Get in touch for a consultation or quote.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contact" className="gap-2">
                  Request a Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="mailto:info@delywnsventuresltd.com"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                info@delywnsventuresltd.com
              </a>
              <a
                href="tel:+254705430417"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                +254 705 430 417
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors group"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
