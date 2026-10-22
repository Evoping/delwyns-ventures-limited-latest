import { Users, Building2, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Professionals Trained",
    description: "Across schools, SMEs, and government agencies",
  },
  {
    icon: Building2,
    value: "20+",
    label: "ICT Projects Delivered",
    description: "Transformative digital solutions implemented",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise and certifications",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Partner Organizations",
    description: "Trusted collaborations nationwide",
  },
];

export function ImpactStats() {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
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
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Driving Digital Transformation
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Measurable results that demonstrate our commitment to empowering organizations through technology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-primary-foreground font-semibold mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-primary-foreground/60 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
