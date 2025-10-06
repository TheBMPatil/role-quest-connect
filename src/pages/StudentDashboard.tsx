import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Briefcase, MapPin, Clock, TrendingUp, BookmarkCheck } from "lucide-react";

const StudentDashboard = () => {
  const [profileCompletion] = useState(75);

  const myApplications = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      appliedDate: "2024-03-15",
      status: "Under Review",
      statusColor: "bg-blue-500"
    },
    {
      id: 2,
      jobTitle: "React Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      appliedDate: "2024-03-12",
      status: "Shortlisted",
      statusColor: "bg-green-500"
    },
    {
      id: 3,
      jobTitle: "UI/UX Developer",
      company: "DesignHub",
      location: "New York, NY",
      appliedDate: "2024-03-10",
      status: "Applied",
      statusColor: "bg-yellow-500"
    }
  ];

  const recommendedJobs = [
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "Austin, TX",
      type: "Full-time",
      match: 95
    },
    {
      id: 5,
      title: "Software Engineer",
      company: "CloudTech",
      location: "Remote",
      type: "Full-time",
      match: 90
    },
    {
      id: 6,
      title: "Junior Developer",
      company: "GrowthCo",
      location: "Boston, MA",
      type: "Full-time",
      match: 85
    }
  ];

  const savedJobs = [
    {
      id: 7,
      title: "Backend Developer",
      company: "DataSystems",
      location: "Seattle, WA",
      type: "Full-time"
    },
    {
      id: 8,
      title: "DevOps Engineer",
      company: "CloudOps",
      location: "Remote",
      type: "Contract"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-secondary mb-2">My Dashboard</h1>
            <p className="text-muted-foreground">Track your applications and discover new opportunities</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/applications">View All Applications</Link>
          </Button>
        </div>

        {/* Profile Completion Card */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Profile Completion
            </CardTitle>
            <CardDescription>Complete your profile to get better job matches</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Profile Strength</span>
                <span className="font-semibold">{profileCompletion}%</span>
              </div>
              <Progress value={profileCompletion} className="h-2" />
              <div className="mt-4">
                <Link to="/profile">
                  <Button variant="outline" size="sm">Complete Profile</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Total Applications</p>
                <p className="text-4xl font-bold text-primary">{myApplications.length}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Saved Jobs</p>
                <p className="text-4xl font-bold text-primary">{savedJobs.length}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Profile Views</p>
                <p className="text-4xl font-bold text-primary">12</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-4">
            {myApplications.map((app) => (
              <Card key={app.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-secondary mb-2">{app.jobTitle}</h3>
                      <p className="text-muted-foreground mb-3">{app.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {app.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Applied {app.appliedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3">
                      <Badge className={`${app.statusColor} text-white`}>{app.status}</Badge>
                      <Link to={`/jobs/${app.id}`}>
                        <Button variant="outline" size="sm">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="recommended" className="space-y-4">
            {recommendedJobs.map((job) => (
              <Card key={job.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-secondary">{job.title}</h3>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {job.match}% Match
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{job.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/jobs/${job.id}`}>
                        <Button>Apply Now</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            {savedJobs.map((job) => (
              <Card key={job.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BookmarkCheck className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold text-secondary">{job.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">{job.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/jobs/${job.id}`}>
                        <Button>Apply Now</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
