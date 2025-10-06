import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Users, Eye, PlusCircle, Calendar } from "lucide-react";

const RecruiterDashboard = () => {
  const myJobPostings = [
    {
      id: 1,
      title: "Senior React Developer",
      location: "Remote",
      type: "Full-time",
      applicants: 45,
      views: 230,
      postedDate: "2024-03-10",
      status: "Active"
    },
    {
      id: 2,
      title: "Product Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      applicants: 32,
      views: 180,
      postedDate: "2024-03-08",
      status: "Active"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "New York, NY",
      type: "Contract",
      applicants: 28,
      views: 150,
      postedDate: "2024-03-05",
      status: "Active"
    }
  ];

  const recentApplicants = [
    {
      id: 1,
      name: "Sarah Johnson",
      jobTitle: "Senior React Developer",
      appliedDate: "2024-03-15",
      status: "New",
      experience: "5 years",
      match: 95
    },
    {
      id: 2,
      name: "Michael Chen",
      jobTitle: "Senior React Developer",
      appliedDate: "2024-03-14",
      status: "Reviewed",
      experience: "4 years",
      match: 88
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      jobTitle: "Product Manager",
      appliedDate: "2024-03-14",
      status: "Shortlisted",
      experience: "6 years",
      match: 92
    },
    {
      id: 4,
      name: "David Kim",
      jobTitle: "UI/UX Designer",
      appliedDate: "2024-03-13",
      status: "New",
      experience: "3 years",
      match: 85
    }
  ];

  const totalApplicants = myJobPostings.reduce((sum, job) => sum + job.applicants, 0);
  const totalViews = myJobPostings.reduce((sum, job) => sum + job.views, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-500";
      case "Reviewed":
        return "bg-yellow-500";
      case "Shortlisted":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-secondary mb-2">Recruiter Dashboard</h1>
            <p className="text-muted-foreground">Manage your job postings and applicants</p>
          </div>
          <Link to="/post-job">
            <Button className="mt-4 md:mt-0">
              <PlusCircle className="mr-2 h-5 w-5" />
              Post New Job
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground mb-2">Active Jobs</p>
                <p className="text-4xl font-bold text-primary">{myJobPostings.length}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground mb-2">Total Applicants</p>
                <p className="text-4xl font-bold text-primary">{totalApplicants}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground mb-2">Total Views</p>
                <p className="text-4xl font-bold text-primary">{totalViews}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-muted-foreground mb-2">Shortlisted</p>
                <p className="text-4xl font-bold text-green-600">8</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="postings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="postings">My Job Postings</TabsTrigger>
            <TabsTrigger value="applicants">Recent Applicants</TabsTrigger>
          </TabsList>

          <TabsContent value="postings" className="space-y-4">
            {myJobPostings.map((job) => (
              <Card key={job.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-secondary">{job.title}</h3>
                        <Badge className="bg-green-500 text-white">{job.status}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{job.location} • {job.type}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.applicants} Applicants
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {job.views} Views
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Posted {job.postedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/jobs/${job.id}`}>
                        <Button variant="outline" size="sm">View Job</Button>
                      </Link>
                      <Button size="sm">View Applicants</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="applicants" className="space-y-4">
            {recentApplicants.map((applicant) => (
              <Card key={applicant.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-secondary">{applicant.name}</h3>
                        <Badge className={`${getStatusColor(applicant.status)} text-white`}>
                          {applicant.status}
                        </Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {applicant.match}% Match
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">Applied for: {applicant.jobTitle}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>{applicant.experience} experience</span>
                        <span>•</span>
                        <span>Applied {applicant.appliedDate}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Profile</Button>
                      <Button size="sm">Contact</Button>
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

export default RecruiterDashboard;
