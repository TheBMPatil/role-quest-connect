import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Building2, TrendingUp, Search } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { label: "Total Users", value: "12,543", icon: Users, change: "+12%" },
    { label: "Active Jobs", value: "2,847", icon: Briefcase, change: "+8%" },
    { label: "Companies", value: "543", icon: Building2, change: "+15%" },
    { label: "Applications", value: "45,231", icon: TrendingUp, change: "+23%" }
  ];

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Student", status: "Active", joined: "2024-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Recruiter", status: "Active", joined: "2024-02-20" },
    { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "Student", status: "Suspended", joined: "2024-03-10" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">{stat.change}</Badge>
                </div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline">{user.role}</Badge>
                          <Badge className={user.status === "Active" ? "bg-green-500" : "bg-red-500"}>
                            {user.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Job Moderation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Job moderation tools coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies">
            <Card>
              <CardHeader>
                <CardTitle>Company Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Company management tools coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
