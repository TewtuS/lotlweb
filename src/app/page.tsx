import { BenefitsSection } from "@/components/BenefitsSection";
import { Footer } from "@/components/Footer";
import { HeroHeading } from "@/components/Hero";
import { ServerExplorer } from "@/components/ServerExplorer";
import { Navbar } from "@/components/Navbar";
import { SpecsSection } from "@/components/SpecsSection";
import { VideoWallpaper } from "@/components/VideoWallpaper";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <VideoWallpaper />

      <div className="page-content min-h-screen">
      <Navbar />

      <div className="texture-bg">
        <HeroHeading />
      </div>

      <ServerExplorer />

      <div className="texture-bg texture-bg-pink">
        <SpecsSection />
      </div>

      <div className="benefits-gradient">
        <BenefitsSection />
      </div>

      <div className="texture-bg">
        <Footer />
      </div>
      </div>
    </div>
  );
}
