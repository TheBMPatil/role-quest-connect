import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase, Clock, Bookmark, Heart } from "lucide-react";

const mockJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $180k",
    postedAt: "2 days ago",
    skills: ["React", "TypeScript", "Node.js"],
    description: "Join our team to build next-generation web applications."
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Design Studio",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    postedAt: "1 week ago",
    skills: ["Figma", "UI/UX", "Prototyping"],
    description: "Create beautiful and intuitive user experiences."
  },
  {
    id: 3,
    title: "Marketing Intern",
    company: "StartUp Co.",
    location: "New York, NY",
    type: "Internship",
    salary: "$20/hour",
    postedAt: "3 days ago",
    skills: ["Social Media", "Content", "Analytics"],
    description: "Gain hands-on experience in digital marketing."
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "AI Solutions",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$130k - $170k",
    postedAt: "5 days ago",
    skills: ["Python", "Machine Learning", "SQL"],
    description: "Leverage data to drive business insights."
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "WebDev Agency",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $110k",
    postedAt: "1 day ago",
    skills: ["React", "CSS", "JavaScript"],
    description: "Build responsive and performant web interfaces."
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Cloud Systems",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140k - $190k",
    postedAt: "1 week ago",
    skills: ["AWS", "Docker", "Kubernetes"],
    description: "Manage and optimize cloud infrastructure."
  }
];

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState("all");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Search Section */}
        <section className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Find Your Dream Job</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by job title, skills, or company..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Jobs List */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{mockJobs.length}</span> jobs
            </p>
          </div>

          <div className="grid gap-6">
            {mockJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        <Link to={`/jobs/${job.id}`} className="hover:text-primary transition-colors">
                          {job.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleSaveJob(job.id)}
                    >
                      <Bookmark 
                        className={`h-5 w-5 ${savedJobs.includes(job.id) ? 'fill-primary text-primary' : ''}`}
                      />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {job.postedAt}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span className="font-semibold text-primary">{job.salary}</span>
                  <Button asChild>
                    <Link to={`/jobs/${job.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
