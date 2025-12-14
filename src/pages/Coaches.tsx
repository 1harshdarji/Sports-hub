import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Calendar, 
  Mail, 
  Award,
  Users,
  Clock
} from "lucide-react";

const coaches = [
  {
    id: 1,
    name: "Alex Thompson",
    specialty: "Personal Training",
    experience: "10+ years",
    rating: 4.9,
    reviews: 156,
    availability: "Mon-Fri",
    image: "🏋️",
    certifications: ["NASM", "ACE", "CrossFit L2"],
    bio: "Specializing in strength training and body transformation. Helped over 500 clients achieve their fitness goals."
  },
  {
    id: 2,
    name: "Maria Garcia",
    specialty: "Swimming",
    experience: "8 years",
    rating: 4.8,
    reviews: 98,
    availability: "Mon-Sat",
    image: "🏊",
    certifications: ["USA Swimming", "Lifeguard Certified", "WSI"],
    bio: "Former competitive swimmer with expertise in technique refinement for all skill levels."
  },
  {
    id: 3,
    name: "James Wilson",
    specialty: "Tennis",
    experience: "15 years",
    rating: 5.0,
    reviews: 234,
    availability: "Tue-Sun",
    image: "🎾",
    certifications: ["PTR", "USPTA Elite", "ITF Level 3"],
    bio: "Professional tennis coach with experience training junior champions and adult beginners alike."
  },
  {
    id: 4,
    name: "Sophie Chen",
    specialty: "Yoga & Wellness",
    experience: "7 years",
    rating: 4.9,
    reviews: 189,
    availability: "Daily",
    image: "🧘",
    certifications: ["RYT-500", "Meditation Teacher", "Prenatal Yoga"],
    bio: "Holistic wellness coach combining traditional yoga with modern mindfulness techniques."
  },
  {
    id: 5,
    name: "Marcus Johnson",
    specialty: "CrossFit",
    experience: "6 years",
    rating: 4.7,
    reviews: 112,
    availability: "Mon-Fri",
    image: "💪",
    certifications: ["CrossFit L3", "USAW", "Gymnastics"],
    bio: "High-intensity training specialist focused on building functional strength and endurance."
  },
  {
    id: 6,
    name: "Emily Roberts",
    specialty: "Nutrition & Fitness",
    experience: "9 years",
    rating: 4.8,
    reviews: 167,
    availability: "Mon-Sat",
    image: "🥗",
    certifications: ["RD", "CSSD", "NASM-CPT"],
    bio: "Registered dietitian combining nutrition expertise with personalized fitness programming."
  },
];

const Coaches = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 gradient-hero">
        <div className="container mx-auto px-4">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
            Expert Team
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Meet Our Coaches
          </h1>
          <p className="text-primary-foreground/80 max-w-xl">
            World-class trainers dedicated to helping you achieve your fitness goals with personalized guidance.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((coach) => (
              <Card key={coach.id} variant="elevated" className="overflow-hidden group">
                <div className="h-48 bg-muted flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {coach.image}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{coach.name}</CardTitle>
                      <CardDescription>{coach.specialty}</CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="font-semibold">{coach.rating}</span>
                      <span className="text-muted-foreground">({coach.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{coach.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {coach.certifications.map((cert, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="w-4 h-4" />
                      {coach.experience}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {coach.availability}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Session
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl gradient-coral flex items-center justify-center mx-auto mb-6 shadow-coral">
              <Users className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Become a Coach at SportHub
            </h2>
            <p className="text-muted-foreground mb-6">
              Are you a certified fitness professional? Join our team of expert coaches 
              and help members achieve their fitness dreams.
            </p>
            <Button variant="secondary" size="lg">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Coaches;
