import { Link } from "react-router-dom";
import { Camera, Shield, Radio, Network, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import service images
import cctvImg from "@/assets/service-cctv.jpg";
import accessControlImg from "@/assets/service-access-control.jpg";
import alarmImg from "@/assets/service-alarm.jpg";
import networkImg from "@/assets/service-network.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";

const services = [
  {
    icon: Camera,
    title: "CCTV Installation",
    description:
      "Tailored CCTV solutions for schools, businesses, and residential estates. HD/4K cameras with remote monitoring via mobile and desktop.",
    href: "/services#cctv",
    image: cctvImg,
  },
  {
    icon: Shield,
    title: "Access Control",
    description:
      "Biometric and RFID card entry solutions integrated with attendance and HR systems for secure premises management.",
    href: "/services#access",
    image: accessControlImg,
  },
  {
    icon: Radio,
    title: "Alarm & Intrusion Detection",
    description:
      "Motion sensors, glass-break detectors, and panic buttons with real-time alerts linked to mobile devices or security desks.",
    href: "/services#alarm",
    image: alarmImg,
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Secure cabling, switches, and firewalls for CCTV networks. Cloud storage and local DVR/NVR solutions for your security setup.",
    href: "/services#network",
    image: networkImg,
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Regular system health checks, firmware updates, and 24/7 troubleshooting with on-call technical support available.",
    href: "/services#maintenance",
    image: maintenanceImg,
  },
];

export function ServicesSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-secondary/40 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-4 h-4 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-secondary/50 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            🔒 Security Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            CCTV & Security Installation Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive security solutions designed for schools, businesses, and communities. Your safety, our priority.
          </p>
        </div>

        {/* Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-secondary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <service.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Link Indicator */}
                <div className="flex items-center text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-secondary to-accent rounded-b-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-muted/50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center relative z-10">
            🌍 Why Choose Delwyns Ventures Ltd
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {[
              { title: "Expertise", desc: "Over a decade of ICT and infrastructure management experience" },
              { title: "Customization", desc: "Solutions tailored to client needs and budgets" },
              { title: "Compliance", desc: "Adherence to data protection and security standards" },
              { title: "Training", desc: "Hands-on training for staff on system usage and monitoring" },
              { title: "Reliability", desc: "Proven track record of uptime and secure installations" },
            ].map((item, index) => (
              <div key={item.title} className="text-center group">
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <span className="text-secondary group-hover:text-secondary-foreground font-bold transition-colors">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Clients */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">🚀 Ideal Clients</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Schools & Colleges",
              "Businesses & SMEs",
              "Residential Estates",
              "Community Projects",
            ].map((client) => (
              <div
                key={client}
                className="bg-card rounded-full px-6 py-3 shadow-soft border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-foreground font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg">
            <Link to="/services" className="gap-2">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
