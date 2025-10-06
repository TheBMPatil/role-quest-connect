import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Users, Briefcase } from "lucide-react";
import { authStore } from "@/stores/authStore";

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState("");
  const auth = authStore.getAuth();

  if (auth.user?.role === 'recruiter') {
    return <Navigate to="/recruiter-dashboard" replace />;
  }

  const companies = [
    {
      id: 1,
      name: "TechCorp Inc.",
      logo: "TC",
      industry: "Technology",
      location: "San Francisco, CA",
      size: "500-1000",
      openJobs: 12,
      description: "Leading technology company building innovative solutions"
    },
    {
      id: 2,
      name: "Design Studio",
      logo: "DS",
      industry: "Design",
      location: "Remote",
      size: "50-100",
      openJobs: 5,
      description: "Creative agency specializing in digital experiences"
    },
    {
      id: 3,
      name: "StartUp Co.",
      logo: "SC",
      industry: "E-commerce",
      location: "New York, NY",
      size: "100-200",
      openJobs: 8,
      description: "Fast-growing e-commerce platform"
    },
    {
      id: 4,
      name: "AI Solutions",
      logo: "AI",
      industry: "Artificial Intelligence",
      location: "Boston, MA",
      size: "200-500",
      openJobs: 15,
      description: "AI-powered business intelligence platform"
    },
    {
      id: 5,
      name: "CloudTech",
      logo: "CT",
      industry: "Cloud Services",
      location: "Seattle, WA",
      size: "1000+",
      openJobs: 25,
      description: "Enterprise cloud infrastructure provider"
    },
    {
      id: 6,
      name: "FinanceHub",
      logo: "FH",
      industry: "Finance",
      location: "Chicago, IL",
      size: "500-1000",
      openJobs: 10,
      description: "Modern financial services platform"
    }
  ];

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-card to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Explore Companies</h1>
              <p className="text-lg text-muted-foreground">
                Discover companies hiring on CareerQuest
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search companies..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredCompanies.length}</span> companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <Card key={company.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">{company.logo}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl mb-1 truncate">{company.name}</CardTitle>
                      <CardDescription>
                        <Badge variant="secondary" className="text-xs">{company.industry}</Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">{company.description}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {company.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {company.size} employees
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-semibold text-primary">{company.openJobs} open positions</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={`/company/${company.id}`}>View Profile</Link>
                    </Button>
                    <Button className="flex-1" asChild>
                      <Link to="/jobs">View Jobs</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
