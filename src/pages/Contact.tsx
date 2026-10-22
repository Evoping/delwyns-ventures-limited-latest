import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  MessageCircle,
  Shield,
  Zap,
} from "lucide-react";
import { z } from "zod";
import codeSecurityVideo from "@/assets/code-security-video.mp4";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    details: ["Parklands, Nairobi", "Kenya"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@delywnsventuresltd.com"],
    href: "mailto:info@delywnsventuresltd.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 705 430 417"],
    href: "tel:+254705430417",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
  },
];

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // WhatsApp Web fallback handler
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phone = "254705430417";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `https://api.whatsapp.com/send?phone=${phone}`
      : `https://web.whatsapp.com/send?phone=${phone}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Create mailto link with form data
      const mailtoLink = `mailto:info@delywnsventuresltd.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening Email Client",
        description: "Your default email app will open with the message.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section with Video */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={codeSecurityVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/85" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-accent/60 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        </div>

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
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary-foreground/20">
              <Zap className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                24/7 Support Available
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Let's Start a{" "}
              <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Have a project in mind or need expert ICT guidance? We're here to help. Reach out and let's discuss how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 animate-fade-up">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Choose your preferred way to reach us.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className="bg-card rounded-xl p-5 shadow-soft border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        {item.details.map((detail, index) =>
                          item.href ? (
                            <a
                              key={index}
                              href={item.href}
                              className="text-muted-foreground hover:text-secondary transition-colors block"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={index} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button with fallback */}
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 bg-secondary text-secondary-foreground rounded-xl p-4 hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-300 w-full group"
              >
                <div className="relative">
                  <MessageCircle className="w-6 h-6" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Chat on WhatsApp</div>
                  <div className="text-sm opacity-80">+254 705 430 417</div>
                </div>
              </button>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated border border-border/50 relative overflow-hidden">
                {/* Animated accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary animate-pulse" />
                
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className={errors.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.1!2d36.8!3d-1.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0x2f04d9f2e5c3b8a1!2sParklands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Delwyns Ventures Office - Parklands, Nairobi"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
