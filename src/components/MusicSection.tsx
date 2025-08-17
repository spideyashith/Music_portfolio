import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import albumCover1 from "@/assets/album-cover-1.jpg";
import albumCover2 from "@/assets/album-cover-2.jpg";

const albums = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    year: "2024",
    image: albumCover1,
    description: "A journey through modern soundscapes and emotional depths.",
    trackCount: 12,
    spotifyUrl: "#",
    appleMusicUrl: "#"
  },
  {
    id: 2,
    title: "Midnight Reflections",
    year: "2023",
    image: albumCover2,
    description: "Intimate melodies that capture the essence of late-night contemplation.",
    trackCount: 10,
    spotifyUrl: "#",
    appleMusicUrl: "#"
  }
];

export const MusicSection = () => {
  return (
    <section id="music" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="display-text gradient-text mb-4">
            Music
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest releases and discover the sonic journey that defines my artistic expression.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {albums.map((album, index) => (
            <Card 
              key={album.id} 
              className="group glass-card hover-lift border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Album Cover */}
                  <div className="relative md:w-48 h-48 md:h-auto overflow-hidden">
                    <img
                      src={album.image}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black-pure/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        size="icon" 
                        className="rounded-full bg-primary/90 hover:bg-primary"
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>

                  {/* Album Info */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {album.title}
                        </h3>
                        <p className="text-primary font-medium">{album.year}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {album.trackCount} tracks
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {album.description}
                    </p>

                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="bg-gradient-gold hover:opacity-90 text-black-pure"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Spotify
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-border hover:bg-secondary"
                      >
                        Apple Music
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};