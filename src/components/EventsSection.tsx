import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Ticket, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    date: "July 15, 2024",
    time: "8:00 PM",
    venue: "Central Park Amphitheater",
    city: "New York, NY",
    status: "upcoming",
    ticketUrl: "#"
  },
  {
    id: 2,
    title: "Intimate Acoustic Evening",
    date: "August 3, 2024",
    time: "7:30 PM",
    venue: "Blue Note",
    city: "Los Angeles, CA",
    status: "upcoming",
    ticketUrl: "#"
  },
  {
    id: 3,
    title: "European Tour - London",
    date: "September 12, 2024",
    time: "9:00 PM",
    venue: "Royal Albert Hall",
    city: "London, UK",
    status: "upcoming",
    ticketUrl: "#"
  },
  {
    id: 4,
    title: "Midnight Sessions Live",
    date: "May 20, 2024",
    time: "8:00 PM",
    venue: "The Apollo Theater",
    city: "Chicago, IL",
    status: "past",
    ticketUrl: "#"
  }
];

export const EventsSection = () => {
  const upcomingEvents = events.filter(event => event.status === "upcoming");
  const pastEvents = events.filter(event => event.status === "past");

  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="display-text gradient-text mb-4">
            Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join me for upcoming performances and relive the magic of past shows.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Calendar className="mr-3 h-6 w-6 text-primary" />
            Upcoming Events
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="group glass-card hover-lift border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Upcoming
                    </Badge>
                    <Button 
                      size="sm" 
                      className="bg-gradient-gold hover:opacity-90 text-black-pure"
                    >
                      <Ticket className="mr-2 h-4 w-4" />
                      Tickets
                    </Button>
                  </div>

                  <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.venue}
                    </div>
                    <div className="text-primary font-medium">
                      {event.city}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Clock className="mr-3 h-6 w-6 text-muted-foreground" />
            Past Events
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="glass-card border-border/30 opacity-75"
                style={{ animationDelay: `${(upcomingEvents.length + index) * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground">
                      Past Event
                    </Badge>
                  </div>

                  <h4 className="text-lg font-bold mb-3 text-foreground/80">
                    {event.title}
                  </h4>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.venue}, {event.city}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};