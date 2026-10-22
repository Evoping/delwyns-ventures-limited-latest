import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, GraduationCap, Building2, Home } from "lucide-react";

const testimonials = [
  {
    quote:
      "Delwyns Ventures transformed our school's security with a comprehensive CCTV system. The coverage and remote monitoring have given us complete peace of mind.",
    organization: "Secondary School in Murang'a",
    type: "Education",
    icon: GraduationCap,
  },
  {
    quote:
      "The access control and alarm systems installed by Delwyns have significantly enhanced our campus security. Professional service and excellent ongoing support.",
    organization: "High School in Central Kenya",
    type: "Education",
    icon: GraduationCap,
  },
  {
    quote:
      "Our warehouse security improved dramatically after Delwyns installed CCTV and motion sensors. We've seen a 90% reduction in incidents.",
    organization: "Manufacturing SME",
    type: "Business",
    icon: Building2,
  },
  {
    quote:
      "The perimeter surveillance and gate access control system has made our estate much safer. Residents are very satisfied with the security upgrade.",
    organization: "Residential Estate",
    type: "Residential",
    icon: Home,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const ActiveIcon = testimonials[activeIndex].icon;

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by schools, businesses, and residential estates across Kenya.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-elevated">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-secondary-foreground" />
            </div>

            {/* Content */}
            <div className="pt-4">
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-6">
                {/* Icon and Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ActiveIcon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">
                      {testimonials[activeIndex].organization}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[activeIndex].type} • Kenya
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-secondary w-6"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Type Icons */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-muted-foreground text-sm mb-6">Trusted by diverse clients</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {testimonials.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-secondary text-secondary-foreground scale-110 shadow-lg"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:scale-105"
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
