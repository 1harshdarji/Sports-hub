import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { 
  Waves, 
  Target, 
  Dumbbell, 
  Users, 
  Clock, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin
} from "lucide-react";

const facilities = [
  {
    id: 1,
    name: "Olympic Swimming Pool",
    icon: Waves,
    description: "50m heated pool with 8 lanes, perfect for lap swimming and water sports.",
    hours: "6:00 AM - 10:00 PM",
    capacity: 40,
    available: 12,
    image: "🏊"
  },
  {
    id: 2,
    name: "Tennis Courts",
    icon: Target,
    description: "4 indoor and 6 outdoor courts with professional-grade surfaces.",
    hours: "7:00 AM - 11:00 PM",
    capacity: 20,
    available: 8,
    image: "🎾"
  },
  {
    id: 3,
    name: "Fitness Center",
    icon: Dumbbell,
    description: "State-of-the-art equipment including cardio, weights, and functional training areas.",
    hours: "5:00 AM - 12:00 AM",
    capacity: 100,
    available: 45,
    image: "🏋️"
  },
  {
    id: 4,
    name: "Group Exercise Studios",
    icon: Users,
    description: "3 spacious studios for yoga, spinning, HIIT, and dance classes.",
    hours: "6:00 AM - 9:00 PM",
    capacity: 30,
    available: 15,
    image: "🧘"
  },
];

const timeSlots = [
  "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00"
];

const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState(facilities[0]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-secondary text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Main Campus - 123 Sports Avenue</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Book a Facility
          </h1>
          <p className="text-primary-foreground/80">
            Reserve your spot at our world-class facilities
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Facility Selection */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-lg font-semibold mb-4">Select Facility</h2>
              {facilities.map((facility) => (
                <Card
                  key={facility.id}
                  variant={selectedFacility.id === facility.id ? "outline" : "elevated"}
                  className={`cursor-pointer ${
                    selectedFacility.id === facility.id ? 'border-secondary border-2' : ''
                  }`}
                  onClick={() => setSelectedFacility(facility)}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      selectedFacility.id === facility.id ? 'bg-secondary/20' : 'bg-muted'
                    }`}>
                      {facility.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{facility.name}</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {facility.hours}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-secondary">
                        {facility.available}
                      </div>
                      <div className="text-xs text-muted-foreground">spots</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Date & Time Selection */}
            <div className="lg:col-span-2">
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-lg">{selectedFacility.name}</CardTitle>
                  <CardDescription>{selectedFacility.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Date Selection */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Select Date</h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {getDates().map((date, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(date)}
                          className={`p-3 rounded-lg text-center transition-all ${
                            selectedDate.toDateString() === date.toDateString()
                              ? 'gradient-coral text-secondary-foreground shadow-coral'
                              : 'bg-muted hover:bg-muted/80'
                          }`}
                        >
                          <div className="text-xs opacity-70">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                          <div className="text-lg font-semibold">{date.getDate()}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <h3 className="font-semibold mb-4">Select Time</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                      {timeSlots.map((time) => {
                        const isAvailable = Math.random() > 0.3;
                        return (
                          <button
                            key={time}
                            onClick={() => isAvailable && setSelectedTime(time)}
                            disabled={!isAvailable}
                            className={`p-2 rounded-lg text-sm transition-all ${
                              selectedTime === time
                                ? 'gradient-coral text-secondary-foreground shadow-coral'
                                : isAvailable
                                ? 'bg-muted hover:bg-primary hover:text-primary-foreground'
                                : 'bg-muted/50 text-muted-foreground cursor-not-allowed line-through'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-muted rounded-xl p-4">
                    <h3 className="font-semibold mb-3">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Facility</span>
                        <span className="font-medium">{selectedFacility.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">{formatDate(selectedDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-medium">{selectedTime || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">1 hour</span>
                      </div>
                    </div>
                    <Button 
                      variant="hero" 
                      className="w-full mt-4"
                      disabled={!selectedTime}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Confirm Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
