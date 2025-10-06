import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Briefcase, Users, TrendingUp, MapPin, Clock, ArrowRight } from "lucide-react";

const featuredJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $180k",
    postedAt: "2 days ago"
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Design Studio",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    postedAt: "1 week ago"
  },
  {
    id: 3,
    title: "Marketing Intern",
    company: "StartUp Co.",
    location: "New York, NY",
    type: "Internship",
    salary: "$20/hour",
    postedAt: "3 days ago"
  }
];

const stats = [
  { icon: Briefcase, label: "Active Jobs", value: "2,500+" },
  { icon: Users, label: "Companies", value: "500+" },
  { icon: TrendingUp, label: "Successful Hires", value: "10,000+" }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-card to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Find Your Dream{" "}
                <span className="text-primary">Career</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Connect with top employers and discover opportunities that match your skills and aspirations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link to="/jobs">
                    Browse Jobs
                    <Search className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Jobs</h2>
              <p className="text-muted-foreground">Hand-picked opportunities just for you</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/jobs">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{job.type}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {job.postedAt}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="font-medium text-foreground">
                    {job.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary">{job.salary}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/jobs/${job.id}`}>
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild>
              <Link to="/jobs">View All Jobs</Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Take the Next Step?
              </h2>
              <p className="text-lg opacity-90">
                Join thousands of professionals who have found their dream careers through CareerQuest
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/register">Create Account</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/jobs">Explore Jobs</Link>
                </Button>
              </div>
              <div className="pt-4">
                <Link to="/testimonials" className="text-sm underline hover:no-underline opacity-90">
                  Read success stories from our users
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
