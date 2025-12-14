import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { Check, Zap, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for beginners starting their fitness journey",
    price: 29,
    icon: Zap,
    popular: false,
    features: [
      "Access to gym facilities",
      "2 group classes per week",
      "Locker room access",
      "Fitness assessment",
      "Mobile app access",
    ],
  },
  {
    name: "Premium",
    description: "Ideal for dedicated athletes seeking more value",
    price: 59,
    icon: Star,
    popular: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Swimming pool access",
      "1 personal training session/month",
      "Sauna & spa access",
      "Nutrition consultation",
      "Priority booking",
    ],
  },
  {
    name: "Elite",
    description: "The ultimate experience for serious athletes",
    price: 99,
    icon: Crown,
    popular: false,
    features: [
      "Everything in Premium",
      "4 personal training sessions/month",
      "Tennis court access",
      "Guest passes (2/month)",
      "Exclusive member events",
      "Free merchandise",
      "VIP locker",
      "24/7 access",
    ],
  },
];

const Membership = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6 animate-slide-up">
            Membership Plans
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-slide-up">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up">
            Flexible membership options designed to fit your lifestyle and fitness goals. 
            No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-background -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <Card 
                key={i} 
                variant="pricing"
                className={`relative ${plan.popular ? 'border-secondary scale-105 z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full gradient-coral text-secondary-foreground text-sm font-medium shadow-coral">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    plan.popular ? 'gradient-coral shadow-coral' : 'bg-primary/10'
                  }`}>
                    <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-secondary-foreground' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'bg-secondary text-secondary-foreground' : 'bg-primary/10 text-primary'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Link to="/payment" className="w-full">
                    <Button 
                      variant={plan.popular ? "hero" : "outline"} 
                      className="w-full" 
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Can I cancel my membership anytime?", a: "Yes, you can cancel your membership at any time with no cancellation fees. Your access will continue until the end of your billing period." },
              { q: "Is there a joining fee?", a: "No joining fee! The price you see is the price you pay. We believe in transparent pricing." },
              { q: "Can I freeze my membership?", a: "Yes, you can freeze your membership for up to 3 months per year at no additional cost." },
              { q: "Do you offer family discounts?", a: "Yes! Family members get 15% off when joining together. Contact us for more details." },
            ].map((faq, i) => (
              <Card key={i} variant="elevated" className="p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;
