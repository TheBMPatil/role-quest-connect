import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To bridge the gap between talented individuals and their dream careers by providing a seamless, efficient platform for job seekers and employers."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building a supportive community where job seekers and employers can connect meaningfully and grow together."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our platform features to our customer support."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to helping both job seekers and companies grow and achieve their full potential."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-card to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">About CareerQuest</h1>
              <p className="text-lg text-muted-foreground">
                We're on a mission to transform the way people find jobs and companies find talent.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                CareerQuest is a modern job platform designed to connect talented individuals with opportunities that match their skills, experience, and career aspirations. Founded in 2024, we've helped thousands of job seekers find their dream roles and enabled companies to discover exceptional talent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our platform leverages cutting-edge technology to provide personalized job recommendations, streamlined application processes, and powerful tools for recruiters to manage their hiring pipeline efficiently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              {values.map((value) => (
                <Card key={value.title} className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <value.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4 pt-8">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                CareerQuest was born from a simple observation: the job search process was broken. Job seekers spent countless hours applying to positions that weren't the right fit, while employers struggled to find qualified candidates among thousands of applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We set out to change that by creating a platform that uses smart matching algorithms, intuitive design, and powerful features to make the hiring process better for everyone involved. Today, we're proud to serve a growing community of job seekers and employers who trust us to help them achieve their goals.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
