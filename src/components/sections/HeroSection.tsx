import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";
import heroTech from "@/assets/hero-tech-1.jpg";
import heroTeam from "@/assets/hero-team.jpg";
import heroEducation from "@/assets/hero-education.jpg";

const heroImages = [heroTech, heroTeam, heroEducation];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Desktop: Video Background */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Mobile: Full-screen slideshow with partition effect */}
      <div className="lg:hidden absolute inset-0 z-0">
        {/* Video background (subtle) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/70" />
        
        {/* Partitioned photo section - right side on mobile */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent z-20" />
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="Digital transformation"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            <div className="absolute top-10 right-4 w-16 h-16 border-t-2 border-r-2 border-accent/50" />
            <div className="absolute bottom-10 left-4 w-16 h-16 border-b-2 border-l-2 border-secondary/50" />
          </div>
        </div>
      </div>

      {/* Desktop: Animated Photo Overlay - Right Side */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={heroImages[currentImageIndex]}
            alt="Digital transformation"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative frame */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 border-t-2 border-r-2 border-accent/50" />
          <div className="absolute bottom-20 left-10 w-32 h-32 border-b-2 border-l-2 border-secondary/50" />
        </div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-secondary/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-accent/15 rounded-full blur-[80px] md:blur-[120px] animate-pulse-soft delay-1000" />
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-[10%] w-2 h-2 bg-accent rounded-full animate-float" />
        <div className="absolute top-1/2 left-[20%] w-1.5 h-1.5 bg-secondary rounded-full animate-float delay-500" />
        <div className="absolute top-2/3 left-[15%] w-1 h-1 bg-primary-foreground/50 rounded-full animate-float delay-1000" />
        <div className="absolute top-1/4 left-[35%] w-2 h-2 bg-secondary rounded-full animate-float" style={{ animationDelay: "0.3s" }} />
        <div className="absolute bottom-1/3 left-[25%] w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{ animationDelay: "0.7s" }} />
        
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px md:60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 pt-24 px-4 md:px-6">
        <div className="max-w-xl lg:max-w-3xl">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-accent/20 backdrop-blur-md rounded-full px-4 md:px-5 py-2 md:py-2.5 mb-6 md:mb-8 border border-secondary/30 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-primary-foreground/90 text-xs md:text-sm font-medium">
              AI-Powered ICT Solutions
            </span>
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Welcome to the{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Future</span>
              <Zap className="absolute -top-1 -right-5 md:-top-2 md:-right-8 w-4 h-4 md:w-6 md:h-6 text-accent animate-pulse" />
            </span>
            {" "}of Digital Innovation
          </h1>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-primary-foreground/80 mb-8 md:mb-10 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Empowering businesses, schools, and communities with cutting-edge AI and ICT solutions. Your transformation journey starts here.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            {["AI Integration", "Smart Solutions", "Digital Training"].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-1.5 md:gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-primary-foreground/20"
              >
                <Brain className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
                <span className="text-primary-foreground/80 text-xs md:text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="hero" size="lg" className="group w-full sm:w-auto">
              <Link to="/services" className="gap-2 justify-center">
                Explore Solutions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg" className="w-full sm:w-auto">
              <Link to="/contact" className="justify-center">Request a Quote</Link>
            </Button>
          </div>

          {/* Stats Preview - Redesigned */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-primary-foreground/10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Trained", fullLabel: "Professionals Trained", icon: "🎓" },
              { value: "20+", label: "Projects", fullLabel: "ICT Projects Delivered", icon: "🚀" },
              { value: "50+", label: "Partners", fullLabel: "Partner Organizations", icon: "🤝" },
            ].map((stat) => (
              <div key={stat.label} className="group text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-1 md:gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground group-hover:text-accent transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-base md:text-lg">{stat.icon}</span>
                </div>
                <div className="text-primary-foreground/60 text-xs md:text-sm">
                  <span className="md:hidden">{stat.label}</span>
                  <span className="hidden md:inline">{stat.fullLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Image Indicators */}
      <div className="flex lg:hidden absolute bottom-24 left-4 z-30 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? "bg-accent w-6"
                : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Desktop Image Indicators */}
      <div className="hidden lg:flex absolute bottom-10 right-10 z-30 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? "bg-accent w-8"
                : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-9 md:w-7 md:h-11 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5 md:p-2 backdrop-blur-sm bg-primary-foreground/5">
          <div className="w-1 h-1.5 md:h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
