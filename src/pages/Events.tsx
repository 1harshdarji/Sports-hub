import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Summer Tennis Championship",
    category: "Tournament",
    date: "Dec 20, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Tennis Courts",
    participants: 32,
    maxParticipants: 64,
    price: "Free",
    image: "🎾",
    featured: true,
  },
  {
    id: 2,
    title: "HIIT Bootcamp",
    category: "Fitness Class",
    date: "Dec 15, 2024",
    time: "7:00 AM - 8:00 AM",
    location: "Outdoor Arena",
    participants: 18,
    maxParticipants: 30,
    price: "$15",
    image: "🏃",
    featured: false,
  },
  {
    id: 3,
    title: "Swimming Gala",
    category: "Competition",
    date: "Dec 22, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Olympic Pool",
    participants: 45,
    maxParticipants: 60,
    price: "$25",
    image: "🏊",
    featured: true,
  },
  {
    id: 4,
    title: "Yoga & Meditation Retreat",
    category: "Wellness",
    date: "Dec 18, 2024",
    time: "6:00 AM - 8:00 AM",
    location: "Studio A",
    participants: 12,
    maxParticipants: 20,
    price: "$20",
    image: "🧘",
    featured: false,
  },
  {
    id: 5,
    title: "Kids Sports Day",
    category: "Family",
    date: "Dec 25, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Main Field",
    participants: 50,
    maxParticipants: 100,
    price: "Free",
    image: "🎯",
    featured: false,
  },
  {
    id: 6,
    title: "CrossFit Challenge",
    category: "Competition",
    date: "Dec 28, 2024",
    time: "8:00 AM - 12:00 PM",
    location: "Fitness Center",
    participants: 24,
    maxParticipants: 40,
    price: "$30",
    image: "🏋️",
    featured: true,
  },
];

const categories = ["All", "Tournament", "Fitness Class", "Competition", "Wellness", "Family"];

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 gradient-hero">
        <div className="container mx-auto px-4">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
            Upcoming Events
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Events & Activities
          </h1>
          <p className="text-primary-foreground/80 max-w-xl">
            Join our exciting events, competitions, and classes. There's something for everyone!
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-card border-b sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Button variant="ghost" size="sm" className="flex-shrink-0">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <div className="h-6 w-px bg-border" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "secondary" : "ghost"}
                size="sm"
                className="flex-shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Featured Event */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Featured Event</h2>
            <Card variant="elevated" className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="gradient-hero p-8 md:p-12 flex items-center justify-center">
                  <div className="text-8xl animate-float">{events[0].image}</div>
                </div>
                <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 gradient-coral text-secondary-foreground border-0">
                    {events[0].category}
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl mb-2">{events[0].title}</CardTitle>
                  <CardDescription className="text-base mb-6">
                    Join us for an exciting championship featuring players from all skill levels. 
                    Prizes and trophies await the winners!
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span>{events[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>{events[0].time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>{events[0].location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-secondary" />
                      <span>{events[0].participants}/{events[0].maxParticipants} joined</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="hero" size="lg">
                      Register Now <ArrowRight className="w-4 h-4" />
                    </Button>
                    <span className="text-lg font-bold text-secondary">{events[0].price}</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* All Events */}
          <h2 className="text-lg font-semibold mb-4">All Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(1).map((event) => (
              <Card key={event.id} variant="elevated" className="overflow-hidden group">
                <div className="h-40 bg-muted flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                  {event.image}
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{event.category}</Badge>
                    <span className="font-semibold text-secondary">{event.price}</span>
                  </div>
                  <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {event.participants}/{event.maxParticipants}
                      </span>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
