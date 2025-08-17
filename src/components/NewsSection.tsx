import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Star } from "lucide-react";

const newsItems = [
  {
    id: 1,
    type: "News",
    title: "New Album 'Echoes of Tomorrow' Breaks Streaming Records",
    excerpt: "Lloyd Rego's latest album has garnered over 10 million streams in its first week, marking a career milestone.",
    date: "June 15, 2024",
    readTime: "3 min read"
  },
  {
    id: 2,
    type: "Review",
    title: "Rolling Stone: 'A Masterpiece of Modern Music'",
    excerpt: "Critics praise the innovative sound and emotional depth of Lloyd's latest work, calling it 'a defining moment in contemporary music.'",
    date: "June 10, 2024",
    readTime: "5 min read",
    rating: 5
  },
  {
    id: 3,
    type: "News",
    title: "European Tour Dates Announced",
    excerpt: "Lloyd Rego announces 15-city European tour beginning September 2024, with special guest appearances planned.",
    date: "May 28, 2024",
    readTime: "2 min read"
  },
  {
    id: 4,
    type: "Interview",
    title: "Billboard Exclusive: The Creative Process Behind the Music",
    excerpt: "An in-depth conversation about songwriting, inspiration, and the evolution of Lloyd's unique sound.",
    date: "May 15, 2024",
    readTime: "8 min read"
  }
];

export const NewsSection = () => {
  return (
    <section id="news" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="display-text gradient-text mb-4">
            News & Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, reviews, and insights from the music industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group glass-card hover-lift border-border/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge 
                    variant={item.type === "Review" ? "default" : "outline"}
                    className={item.type === "Review" ? "bg-gradient-gold text-black-pure" : ""}
                  >
                    {item.type}
                    {item.rating && (
                      <div className="ml-2 flex">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    )}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {item.readTime}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="group-hover:text-primary transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="glass-card border-border/50 mt-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to get the latest news, exclusive content, and updates about upcoming releases and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-gold hover:opacity-90 text-black-pure px-6">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};