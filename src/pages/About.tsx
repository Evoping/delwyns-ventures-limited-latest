import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Award, Users, Target, Eye, Heart, Lightbulb, Handshake, Shield, Cpu } from "lucide-react";
import evansMugacha from "@/assets/evans-mugacha.jpg";
import codeSecurityVideo from "@/assets/code-security-video.mp4";

const values = [
  { icon: Heart, title: "Integrity", description: "We uphold the highest ethical standards in all our dealings." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace new technologies and creative solutions." },
  { icon: Handshake, title: "Collaboration", description: "We work together with clients as true partners." },
  { icon: Target, title: "Impact", description: "We measure success by the positive change we create." },
];

const certifications = [
  "Microsoft Certified Solutions Associate (MCSA)",
  "Cisco Certified Network Associate (CCNA)",
  "Certified Information Security Manager",
  "Project Management Professional",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[60vh] flex items-center">
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
        <div className="absolute inset-0 bg-primary/80" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-accent/60 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary-foreground/40 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Grid Pattern */}
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
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Trusted Since 2010
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Driving Digital Transformation{" "}
              <span className="text-gradient">Across Africa</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Delwyns Ventures Ltd is a leading ICT consultancy committed to empowering businesses, schools, and communities through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-up">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Vision to Impact
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded by Evans Waruingi Mugacha, Delwyns Ventures Ltd was born from a vision to bridge the digital divide in Kenya and beyond. Recognizing the transformative power of technology, we set out to create an organization that would not only provide ICT solutions but truly partner with clients to achieve their goals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based in Parklands, Nairobi, we have grown from a small consultancy to a trusted partner for schools, SMEs, government agencies, and NGOs across the region. Our commitment to excellence, integrity, and community impact remains at the heart of everything we do.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, with over 500 professionals trained and 20+ major ICT projects delivered, we continue to expand our reach while staying true to our founding principles.
              </p>
            </div>
            
            {/* CEO Card with Image */}
            <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border/50 relative overflow-hidden group animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {/* Animated border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-secondary animate-pulse" />
                  Leadership Profile
                </h3>
                
                {/* CEO Image and Info */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-secondary/30 shadow-lg">
                      <img 
                        src={evansMugacha} 
                        alt="Evans Waruingi Mugacha - CEO" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Animated ring */}
                    <div className="absolute -inset-1 rounded-xl border-2 border-accent/30 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Evans Waruingi Mugacha</h4>
                    <p className="text-secondary font-medium">Founder & CEO</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      <span className="text-xs text-muted-foreground">Leading Digital Innovation</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With extensive experience in ICT consultancy and a passion for digital empowerment, Evans leads Delwyns Ventures with a focus on innovation and community impact.
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    Professional Certifications
                  </h4>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <li 
                        key={cert} 
                        className="flex items-center gap-2 text-sm text-muted-foreground group/item hover:text-foreground transition-colors"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Award className="w-4 h-4 text-accent shrink-0 group-hover/item:scale-110 transition-transform" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Enhanced Design */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                <Target className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To deliver innovative ICT solutions that transform organizations, empower communities, and drive sustainable development across Africa. We are committed to providing exceptional value through strategic consultancy, comprehensive training, and cutting-edge technology implementation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                <Eye className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be Africa's most trusted partner in digital transformation, recognized for excellence, integrity, and lasting positive impact. We envision a future where every organization, regardless of size, can harness the full potential of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with Enhanced Animation */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Our values are the foundation of every interaction, project, and decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50 group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
