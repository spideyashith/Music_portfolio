import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Camera, ZoomIn } from "lucide-react";

// For demo purposes, using the generated images
import albumCover1 from "@/assets/album-cover-1.jpg";
import albumCover2 from "@/assets/album-cover-2.jpg";
import artistPortrait from "@/assets/artist-portrait.jpg";

const galleryImages = [
  {
    id: 1,
    src: "/hero-image.jpg",
    alt: "Live performance at concert hall",
    category: "Performance",
    title: "Concert Hall Performance"
  },
  {
    id: 2,
    src: artistPortrait,
    alt: "Studio portrait session",
    category: "Portrait",
    title: "Studio Session"
  },
  {
    id: 3,
    src: albumCover1,
    alt: "Behind the scenes recording",
    category: "Studio",
    title: "Recording Process"
  },
  {
    id: 4,
    src: albumCover2,
    alt: "Backstage moments",
    category: "Behind the Scenes",
    title: "Backstage"
  },
  {
    id: 5,
    src: "/hero-image.jpg",
    alt: "Live show crowd",
    category: "Performance",
    title: "Live Show Energy"
  },
  {
    id: 6,
    src: artistPortrait,
    alt: "Creative process",
    category: "Studio",
    title: "Creative Moments"
  }
];

const categories = ["All", "Performance", "Studio", "Portrait", "Behind the Scenes"];

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="display-text gradient-text mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through performances, studio sessions, and behind-the-scenes moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                selectedCategory === category 
                  ? "bg-gradient-gold text-black-pure" 
                  : "border-border hover:border-primary"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <Camera className="mr-2 h-3 w-3" />
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="group glass-card border-border/50 overflow-hidden hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black-pure/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white-pure">
                    <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-medium">{image.title}</p>
                    <Badge variant="secondary" className="mt-2 bg-primary/20">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-sm border-border">
            {selectedImage && (
              <div className="space-y-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                  <Badge className="bg-primary/20 text-primary">
                    {selectedImage.category}
                  </Badge>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};