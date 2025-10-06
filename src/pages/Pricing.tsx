import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Post up to 2 jobs per month",
        "Basic applicant tracking",
        "Email support",
        "Job listing for 30 days",
        "Access to candidate database"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "For growing companies",
      features: [
        "Post up to 10 jobs per month",
        "Advanced applicant tracking",
        "Priority email support",
        "Job listing for 60 days",
        "Featured job listings",
        "Advanced analytics",
        "Custom branding"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      features: [
        "Unlimited job postings",
        "Full applicant tracking system",
        "24/7 phone & email support",
        "Unlimited job listing duration",
        "Premium featured listings",
        "Advanced analytics & reporting",
        "Custom branding & white-label",
        "Dedicated account manager",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-card to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h1>
              <p className="text-lg text-muted-foreground">
                Choose the plan that's right for your hiring needs. All plans include access to our candidate database.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${plan.popular ? 'border-primary shadow-lg' : 'border-primary/20'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/register">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, Professional and Enterprise plans come with a 14-day free trial. No credit card required.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely. You can cancel your subscription at any time with no cancellation fees.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
