import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Building2, ExternalLink } from "lucide-react";

export default function Applications() {
  const applications = [
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
      status: "Interview Scheduled",
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
    },
    {
      id: 4,
      jobTitle: "Software Engineer",
      company: "CloudTech",
      location: "Seattle, WA",
      appliedDate: "2024-03-05",
      status: "Rejected",
      statusColor: "bg-red-500"
    }
  ];

  const activeApplications = applications.filter(app => 
    !["Rejected", "Withdrawn"].includes(app.status)
  );

  const pastApplications = applications.filter(app => 
    ["Rejected", "Withdrawn"].includes(app.status)
  );

  const ApplicationCard = ({ app }: { app: typeof applications[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold">{app.jobTitle}</h3>
              <Badge className={`${app.statusColor} text-white ml-2`}>{app.status}</Badge>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                {app.company}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {app.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Applied on {app.appliedDate}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/jobs/${app.id}`}>
                <ExternalLink className="h-4 w-4 mr-1" />
                View Job
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Applications</h1>
          <p className="text-muted-foreground">Track and manage all your job applications</p>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active">
              Active ({activeApplications.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Past ({pastApplications.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeApplications.length > 0 ? (
              activeApplications.map((app) => (
                <ApplicationCard key={app.id} app={app} />
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground mb-4">No active applications</p>
                  <Button asChild>
                    <Link to="/jobs">Browse Jobs</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastApplications.length > 0 ? (
              pastApplications.map((app) => (
                <ApplicationCard key={app.id} app={app} />
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No past applications</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
