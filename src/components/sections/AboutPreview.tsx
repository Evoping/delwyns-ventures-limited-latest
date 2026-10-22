import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Strategic ICT planning & policy development",
  "Certified professionals (MCSA, CCNA, Cybersecurity)",
  "Community-focused digital empowerment",
  "End-to-end project implementation",
];

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in Digital Transformation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded with a vision to bridge the digital divide, Delwyns Ventures Ltd has become a leading ICT consultancy in Kenya. We empower businesses, schools, and communities with innovative solutions that drive growth and efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Under the leadership of Evans Waruingi Mugacha, our team of certified professionals delivers excellence in every project. From strategic planning to hands-on implementation, we're committed to your success.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="default" size="lg">
              <Link to="/about" className="gap-2">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-primary-foreground">
              {/* Mission Card */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To deliver innovative ICT solutions that transform organizations, empower communities, and drive sustainable development across Africa.
                </p>
              </div>

              {/* Vision Card */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To be Africa's most trusted partner in digital transformation, recognized for excellence, integrity, and impact.
                </p>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-xl font-bold mb-4">Core Values</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Integrity", "Innovation", "Collaboration", "Impact"].map((value) => (
                    <div
                      key={value}
                      className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center border border-primary-foreground/20"
                    >
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
