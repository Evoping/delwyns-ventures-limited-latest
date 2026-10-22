import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, GraduationCap, CheckCircle, Camera, Shield, Lock, Home } from "lucide-react";

// Import project images
import serviceCctvImg from "@/assets/service-cctv.jpg";
import serviceAccessControlImg from "@/assets/service-access-control.jpg";
import serviceAlarmImg from "@/assets/service-alarm.jpg";

const caseStudies = [
  {
    title: "School Campus Security System",
    category: "CCTV & Access Control",
    icon: GraduationCap,
    description:
      "Comprehensive security installation for a secondary school including 32 HD cameras, biometric access control at all entry points, and centralized monitoring system.",
    results: [
      "32 HD cameras covering entire campus",
      "Biometric access at 8 entry points",
      "24/7 remote monitoring capability",
      "Integration with attendance system",
    ],
    image: serviceCctvImg,
  },
  {
    title: "SME Warehouse Protection",
    category: "CCTV & Alarm Systems",
    icon: Building2,
    description:
      "Full security overhaul for a manufacturing warehouse including motion-sensor alarms, perimeter CCTV, and real-time mobile alerts for management.",
    results: [
      "90% reduction in security incidents",
      "Motion sensors and glass-break detectors",
      "Real-time mobile alerts",
      "Cloud backup of all footage",
    ],
    image: serviceAlarmImg,
  },
  {
    title: "Residential Estate Surveillance",
    category: "Perimeter Security",
    icon: Home,
    description:
      "Installed a complete perimeter security solution for a gated community including gate access control, CCTV coverage, and integrated alarm systems.",
    results: [
      "RFID card entry for residents",
      "Perimeter cameras with night vision",
      "Centralized guard monitoring station",
      "Panic button integration",
    ],
    image: serviceAccessControlImg,
  },
];

const impactMetrics = [
  { value: "100+", label: "CCTV Installations" },
  { value: "50+", label: "Access Control Systems" },
  { value: "30+", label: "Alarm Deployments" },
  { value: "15+", label: "Years Experience" },
];

const Projects = () => {
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
              Projects & Impact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Security Solutions Delivered
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Explore our portfolio of successful CCTV, access control, and alarm system installations across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-muted-foreground text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Installations
            </h2>
            <p className="text-muted-foreground text-lg">
              A detailed look at some of our most impactful security implementations.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="bg-card rounded-2xl overflow-hidden shadow-elevated border border-border/50"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <study.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-secondary font-semibold text-sm">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {study.description}
                    </p>

                    <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                    <ul className="space-y-2 mb-6">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We Secure All Types of Properties
            </h2>
            <p className="text-muted-foreground text-lg">
              From schools to businesses to residential estates, we deliver tailored security solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Schools & Colleges", icon: GraduationCap },
              { name: "SMEs & Corporates", icon: Building2 },
              { name: "Residential Estates", icon: Home },
              { name: "Community Projects", icon: Shield },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-card rounded-xl p-6 text-center shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free site assessment and customized security solution quote.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact" className="gap-2">
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
