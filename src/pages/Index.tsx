import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MusicSection } from "@/components/MusicSection";
import { EventsSection } from "@/components/EventsSection";
import { GallerySection } from "@/components/GallerySection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MusicSection />
        <EventsSection />
        <GallerySection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
