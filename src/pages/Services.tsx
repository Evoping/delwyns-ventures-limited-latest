import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Shield,
  Radio,
  Network,
  Wrench,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Building2,
  Home,
  Users,
} from "lucide-react";

// Import service images
import cctvImg from "@/assets/service-cctv.jpg";
import accessControlImg from "@/assets/service-access-control.jpg";
import alarmImg from "@/assets/service-alarm.jpg";
import networkImg from "@/assets/service-network.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";

const services = [
  {
    id: "cctv",
    icon: Camera,
    title: "CCTV System Design & Installation",
    subtitle: "Complete Surveillance Solutions",
    description:
      "Tailored CCTV solutions for schools, businesses, and residential estates. We provide end-to-end surveillance systems with HD/4K resolution cameras and remote monitoring capabilities.",
    features: [
      "Indoor and outdoor camera setups with HD/4K resolution",
      "Remote monitoring via mobile and desktop applications",
      "Tailored solutions for schools, businesses, and estates",
      "Cloud storage and local DVR/NVR solutions",
      "Night vision and motion detection capabilities",
      "Professional installation and configuration",
    ],
    image: cctvImg,
  },
  {
    id: "access",
    icon: Shield,
    title: "Access Control Systems",
    subtitle: "Secure Entry Management",
    description:
      "Biometric and RFID card entry solutions designed to control and monitor access to your premises, integrated with attendance and HR systems.",
    features: [
      "Biometric fingerprint and facial recognition systems",
      "RFID card entry solutions",
      "Integration with attendance and HR systems",
      "Visitor management systems",
      "Time and attendance tracking",
      "Multi-site access control management",
    ],
    image: accessControlImg,
  },
  {
    id: "alarm",
    icon: Radio,
    title: "Alarm & Intrusion Detection",
    subtitle: "Real-Time Security Alerts",
    description:
      "Comprehensive alarm systems featuring motion sensors, glass-break detectors, and panic buttons with real-time alerts linked to mobile devices or security desks.",
    features: [
      "Motion sensors and glass-break detectors",
      "Panic buttons for emergency alerts",
      "Real-time alerts to mobile devices",
      "Integration with security monitoring desks",
      "Perimeter protection systems",
      "24/7 monitoring capabilities",
    ],
    image: alarmImg,
  },
  {
    id: "network",
    icon: Network,
    title: "Network & Infrastructure Integration",
    subtitle: "Secure Connectivity Solutions",
    description:
      "We design and implement secure network infrastructure for your CCTV systems, including cabling, switches, and firewalls for optimal performance.",
    features: [
      "Secure cabling and structured wiring",
      "Network switches and firewalls setup",
      "Cloud storage integration",
      "Local DVR/NVR solutions",
      "Bandwidth optimization for video streaming",
      "VPN setup for remote access",
    ],
    image: networkImg,
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    subtitle: "Ongoing System Care",
    description:
      "We provide comprehensive maintenance and support services to ensure your security systems operate at peak performance with minimal downtime.",
    features: [
      "Regular system health checks",
      "Firmware updates and patches",
      "24/7 troubleshooting and support",
      "On-call technical assistance",
      "Preventive maintenance programs",
      "Emergency repair services",
    ],
    image: maintenanceImg,
  },
];

const idealClients = [
  { icon: GraduationCap, title: "Schools & Colleges", description: "Secure learning environments with integrated access control" },
  { icon: Building2, title: "Businesses & SMEs", description: "Protect assets, monitor activity, and ensure compliance" },
  { icon: Home, title: "Residential Estates", description: "Enhance safety with perimeter surveillance and alarms" },
  { icon: Users, title: "Community Projects", description: "Affordable security solutions for community spaces" },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Comprehensive ICT Solutions for Your Success
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From strategic consultancy to hands-on implementation, we offer end-to-end ICT services tailored to your organization's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <span className="text-secondary font-semibold text-sm">{service.subtitle}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="default">
                    <Link to="/contact" className="gap-2">
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>

                {/* Visual with Real Image */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-primary-foreground">
                        <service.icon className="w-5 h-5" />
                        <span className="font-semibold">{service.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Clients Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
              🚀 Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ideal Clients
            </h2>
            <p className="text-muted-foreground text-lg">
              Our security solutions are designed for organizations that prioritize safety and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {idealClients.map((client) => (
              <div
                key={client.title}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <client.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{client.title}</h3>
                <p className="text-muted-foreground text-sm">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your ICT needs and discover how we can help you achieve your goals.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact" className="gap-2">
              Request a Quote
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
