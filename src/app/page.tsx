import { AxolotlSection } from "@/components/AxolotlSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { BestSection } from "@/components/BestSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ServerExplorer } from "@/components/ServerExplorer";
import { SpecsSection } from "@/components/SpecsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <div className="section-divider" />
      <ServerExplorer />

      <SpecsSection />

      <BenefitsSection />

      <BestSection />
      <AxolotlSection />

      <Footer />
    </div>
  );
}
