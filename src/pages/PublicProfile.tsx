import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Mail, Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function PublicProfile() {
  const { id } = useParams();

  const profile = {
    name: "John Doe",
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    bio: "Passionate software developer with 5+ years of experience building scalable web applications. Specialized in React, TypeScript, and Node.js.",
    skills: ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Docker"],
    experience: [
      {
        title: "Senior Software Engineer",
        company: "TechCorp Inc.",
        period: "2022 - Present",
        description: "Leading frontend development team, architecting scalable solutions"
      },
      {
        title: "Software Engineer",
        company: "StartupXYZ",
        period: "2020 - 2022",
        description: "Developed core features for the main product platform"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Stanford University",
        period: "2016 - 2020"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-background">
        <div className="bg-gradient-to-br from-background via-card to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="h-32 w-32">
                <AvatarFallback className="bg-primary/10 text-primary text-4xl font-bold">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{profile.title}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {profile.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {profile.email}
                  </div>
                </div>
                <Button>Contact</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {profile.experience.map((exp, idx) => (
                    <div key={idx} className="border-l-2 border-primary pl-4">
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profile.education.map((edu, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
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
