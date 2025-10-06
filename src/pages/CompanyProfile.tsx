import { useParams, Link, Navigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Briefcase, Globe, Calendar } from "lucide-react";
import { authStore } from "@/stores/authStore";

export default function CompanyProfile() {
  const { id } = useParams();
  const auth = authStore.getAuth();

  if (auth.user?.role === 'recruiter') {
    return <Navigate to="/recruiter-dashboard" replace />;
  }

  const company = {
    name: "TechCorp Inc.",
    logo: "TC",
    industry: "Technology",
    size: "500-1000 employees",
    location: "San Francisco, CA",
    website: "www.techcorp.com",
    founded: "2015",
    description: "TechCorp is a leading technology company focused on building innovative solutions that make a difference in people's lives. We're passionate about creating products that solve real-world problems.",
    culture: "We believe in fostering a collaborative environment where creativity thrives. Our team is diverse, talented, and committed to excellence.",
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Unlimited PTO",
      "Remote work options",
      "Professional development budget"
    ],
    openJobs: [
      { id: 1, title: "Senior Software Engineer", location: "Remote", type: "Full-time" },
      { id: 2, title: "Product Designer", location: "San Francisco, CA", type: "Full-time" },
      { id: 3, title: "DevOps Engineer", location: "Remote", type: "Full-time" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-background">
        <div className="bg-gradient-to-br from-background via-card to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-32 h-32 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-5xl font-bold text-primary">{company.logo}</span>
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{company.industry}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {company.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {company.size}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Founded {company.founded}
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    {company.website}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About {company.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{company.description}</p>
                  <p className="text-muted-foreground leading-relaxed">{company.culture}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Benefits & Perks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {company.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Badge variant="secondary" className="mt-0.5">✓</Badge>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Open Positions ({company.openJobs.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {company.openJobs.map((job) => (
                    <div key={job.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <h3 className="font-semibold mb-1">{job.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{job.location}</p>
                      <Badge variant="outline" className="text-xs">{job.type}</Badge>
                    </div>
                  ))}
                  <Button className="w-full" asChild>
                    <Link to="/jobs">View All Jobs</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
