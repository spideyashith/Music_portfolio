import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-image.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-in fade-in duration-700">
          <h1 className="hero-text text-white-pure mb-6">
            Lloyd Rego
          </h1>
          <p className="text-xl md:text-2xl text-white-pure/90 mb-8 max-w-2xl mx-auto">
            Crafting musical experiences that transcend boundaries and connect souls through rhythm and melody.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-gold hover:opacity-90 text-black-pure font-semibold px-8 py-3 rounded-full hover-lift"
            >
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white-pure text-white-pure hover:bg-white-pure hover:text-black-pure px-8 py-3 rounded-full transition-all duration-300"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Watch Latest Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};