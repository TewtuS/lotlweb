import { AxolotlSection } from "@/components/AxolotlSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { BestSection } from "@/components/BestSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServerExplorer } from "@/components/ServerExplorer";
import { SpecsSection } from "@/components/SpecsSection";
import { VideoWallpaper } from "@/components/VideoWallpaper";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <VideoWallpaper />

      <div className="page-content min-h-screen">
        <Navbar />
        <Hero />

        <ScrollReveal>
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
      </div>
    </main>
  );
}
