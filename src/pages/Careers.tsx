import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Lightbulb,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import codeSecurityVideo from "@/assets/code-security-video.mp4";

const values = [
  {
    icon: Lightbulb,
    title: "Keep learning",
    description:
      "Technology moves quickly. We value curiosity, practical learning, and sharing knowledge with others.",
  },
  {
    icon: Handshake,
    title: "Work as a team",
    description:
      "Good ICT solutions come from listening to clients and collaborating across disciplines.",
  },
  {
    icon: Users,
    title: "Make a difference",
    description:
      "Our work supports businesses, schools, and communities as they use technology to meet real needs.",
  },
];

const areas = [
  "ICT support and systems maintenance",
  "Networks, infrastructure, and security",
  "Software and digital solutions",
  "ICT training and consultancy",
  "Client service and project coordination",
];

const Careers = () => (
  <Layout>
    <section className="pt-32 pb-20 relative overflow-hidden min-h-[50vh] flex items-center">
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
      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary-foreground/20">
            <BriefcaseBusiness className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Careers at Delwyns
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Build technology that{" "}
            <span className="text-gradient">makes a difference</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Join a team helping businesses, schools, and communities get more
            from technology through practical ICT solutions, training, and
            support.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Why work with us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Technology with purpose
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Delwyns Ventures works across ICT consultancy, infrastructure,
            digital solutions, and training. We value dependable service,
            continuous learning, and technology that solves meaningful
            challenges for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="bg-card rounded-2xl p-7 border border-border/50 shadow-soft"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/40">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Areas of work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Where your skills can contribute
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Our projects bring together technical expertise and a commitment to
            useful, reliable service. We welcome interest from people whose
            skills and experience align with our work.
          </p>
          <ul className="space-y-4">
            {areas.map((area) => (
              <li key={area} className="flex items-start gap-3 text-foreground">
                <GraduationCap className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated border border-border/50">
          <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
            <MapPin className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Current opportunities
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            There are no specific vacancies listed here at the moment. If
            you’re interested in working with Delwyns, email your CV and a
            short introduction. Please include the area of work you’re
            interested in; we’ll be in touch if a suitable opportunity arises.
          </p>
          <Button asChild variant="default" className="group">
            <a href="mailto:info@delywnsventuresltd.com?subject=Careers%20enquiry">
              <Mail className="w-4 h-4 mr-2" />
              Send a careers enquiry
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            You can also{" "}
            <Link to="/contact" className="text-secondary hover:underline">
              contact our team
            </Link>{" "}
            with any questions.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
