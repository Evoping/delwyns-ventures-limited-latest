import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSnapshot />
      <AboutPreview />
      <ImpactStats />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
