import { AxolotlSection } from "@/components/AxolotlSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { BestSection } from "@/components/BestSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServerExplorer } from "@/components/ServerExplorer";
import { SpecsSection } from "@/components/SpecsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <ScrollReveal>
        <div className="section-divider" />
        <ServerExplorer />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <SpecsSection />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <BenefitsSection />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <BestSection />
        <AxolotlSection />
      </ScrollReveal>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
