import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Briefcase, DollarSign, Calendar, Building2, Users, CheckCircle2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const mockJobDetails = {
  id: 1,
  title: "Senior Software Engineer",
  company: "TechCorp Inc.",
  location: "San Francisco, CA",
  type: "Full-time",
  salary: "$120,000 - $180,000",
  postedAt: "2 days ago",
  deadline: "March 30, 2025",
  skills: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
  description: `We are looking for a talented Senior Software Engineer to join our growing team. You will be responsible for designing, developing, and maintaining high-quality web applications that serve millions of users.`,
  responsibilities: [
    "Design and implement new features for our web platform",
    "Collaborate with cross-functional teams to define and ship new features",
    "Write clean, maintainable, and testable code",
    "Mentor junior developers and conduct code reviews",
    "Optimize applications for maximum speed and scalability"
  ],
  requirements: [
    "5+ years of experience in software development",
    "Strong proficiency in React and TypeScript",
    "Experience with Node.js and RESTful APIs",
    "Familiarity with cloud platforms (AWS preferred)",
    "Excellent problem-solving and communication skills"
  ],
  benefits: [
    "Competitive salary and equity package",
    "Health, dental, and vision insurance",
    "401(k) matching",
    "Unlimited PTO",
    "Remote-friendly work environment",
    "Professional development budget"
  ],
  companyInfo: {
    name: "TechCorp Inc.",
    size: "500-1000 employees",
    industry: "Technology",
    description: "TechCorp is a leading technology company focused on building innovative solutions that make a difference in people's lives."
  }
};

export default function JobDetails() {
  const { id } = useParams();

  const handleApply = () => {
    toast.success("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/jobs">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-3xl mb-2">{mockJobDetails.title}</CardTitle>
                      <CardDescription className="text-lg">{mockJobDetails.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {mockJobDetails.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {mockJobDetails.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {mockJobDetails.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Posted {mockJobDetails.postedAt}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                    <p className="text-muted-foreground leading-relaxed">{mockJobDetails.description}</p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
                    <ul className="space-y-2">
                      {mockJobDetails.responsibilities.map((item, index) => (
                        <li key={index} className="flex gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                    <ul className="space-y-2">
                      {mockJobDetails.requirements.map((item, index) => (
                        <li key={index} className="flex gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {mockJobDetails.benefits.map((item, index) => (
                        <li key={index} className="flex gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {mockJobDetails.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Apply for this position</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg" onClick={handleApply}>
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Save for Later
                  </Button>
                  <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Deadline: {mockJobDetails.deadline}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>About {mockJobDetails.companyInfo.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {mockJobDetails.companyInfo.description}
                  </p>
                  <Separator />
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>{mockJobDetails.companyInfo.industry}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{mockJobDetails.companyInfo.size}</span>
                    </div>
                  </div>
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
