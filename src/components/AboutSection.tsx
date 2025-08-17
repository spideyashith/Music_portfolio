import { Card, CardContent } from "@/components/ui/card";
import { Award, Music, Users, Calendar } from "lucide-react";
import artistPortrait from "@/assets/artist-portrait.jpg";

const achievements = [
  { icon: Award, label: "Awards Won", value: "15+" },
  { icon: Music, label: "Albums Released", value: "8" },
  { icon: Users, label: "Global Fans", value: "2M+" },
  { icon: Calendar, label: "Years Active", value: "12" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="display-text gradient-text mb-4">
            About Lloyd
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the artist behind the music and the journey that shaped a unique sound.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="relative animate-in slide-in-from-bottom-4 duration-500">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={artistPortrait}
                alt="Lloyd Rego"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "200ms" }}>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Musical Journey</h3>
              <p className="text-muted-foreground mb-4">
                Lloyd Rego has been crafting exceptional musical experiences for over a decade, 
                blending contemporary sounds with timeless melodies that resonate with audiences worldwide.
              </p>
              <p className="text-muted-foreground">
                From intimate acoustic sessions to grand orchestral arrangements, Lloyd's versatility 
                and passion for musical innovation have earned critical acclaim and a devoted global following.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card 
                    key={achievement.label} 
                    className="glass-card border-border/50 text-center"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <CardContent className="p-4">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};