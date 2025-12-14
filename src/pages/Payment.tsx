import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { 
  CreditCard, 
  Lock, 
  Shield, 
  Check, 
  Calendar,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <Layout>
      <section className="py-8 md:py-12 bg-muted min-h-[calc(100vh-5rem)]">
        <div className="container mx-auto px-4">
          <Link to="/membership" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Plans
          </Link>

          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Payment Form */}
            <div className="lg:col-span-3">
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl">Payment Details</CardTitle>
                  <CardDescription>
                    Complete your membership purchase securely
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Card Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-sm flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-secondary" />
                      Card Information
                    </h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        placeholder="1234 5678 9012 3456" 
                        className="font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" type="password" maxLength={4} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-sm">Billing Address</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="123 Main Street" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="10001" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" placeholder="United States" />
                    </div>
                  </div>

                  {/* Security Badge */}
                  <div className="bg-muted rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Secure Payment</p>
                      <p className="text-xs text-muted-foreground">
                        Your payment information is encrypted and secure
                      </p>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full" size="lg">
                    <Lock className="w-4 h-4 mr-2" />
                    Pay $59.00
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By confirming, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <Card variant="elevated" className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Plan Details */}
                  <div className="bg-muted rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl gradient-coral flex items-center justify-center shadow-coral">
                        <span className="text-xl">⭐</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Premium Plan</h4>
                        <p className="text-sm text-muted-foreground">Monthly subscription</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {["Unlimited classes", "Pool access", "1 PT session/month"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Premium Plan</span>
                      <span>$59.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Joining Fee</span>
                      <span className="line-through text-muted-foreground">$50.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-accent">
                      <span>First Month Discount</span>
                      <span>-$0.00</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between font-semibold">
                      <span>Total Today</span>
                      <span className="text-xl">$59.00</span>
                    </div>
                  </div>

                  {/* Renewal Info */}
                  <div className="flex items-start gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Next billing date</p>
                      <p className="text-muted-foreground">January 13, 2025</p>
                    </div>
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

export default Payment;
