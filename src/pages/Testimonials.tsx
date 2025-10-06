import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "TechCorp Inc.",
      avatar: "SJ",
      rating: 5,
      text: "CareerQuest helped me land my dream job! The platform is intuitive, and I loved how it matched me with positions that truly fit my skills and career goals."
    },
    {
      name: "Michael Chen",
      role: "Product Designer",
      company: "Design Studio",
      avatar: "MC",
      rating: 5,
      text: "As a recruiter, CareerQuest has been a game-changer. The quality of candidates is exceptional, and the application management tools save us hours every week."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "StartUp Co.",
      avatar: "ER",
      rating: 5,
      text: "I was skeptical at first, but CareerQuest exceeded my expectations. Within two weeks, I had multiple interviews lined up with top companies."
    },
    {
      name: "David Kim",
      role: "Data Scientist",
      company: "AI Solutions",
      avatar: "DK",
      rating: 5,
      text: "The job recommendations were spot-on! CareerQuest understood exactly what I was looking for and connected me with the perfect opportunity."
    },
    {
      name: "Jessica Taylor",
      role: "HR Director",
      company: "CloudTech",
      avatar: "JT",
      rating: 5,
      text: "We've hired 15 amazing people through CareerQuest. The platform makes it easy to find qualified candidates and manage the entire hiring process."
    },
    {
      name: "Alex Martinez",
      role: "Full Stack Developer",
      company: "WebDev Agency",
      avatar: "AM",
      rating: 5,
      text: "CareerQuest's profile features helped me showcase my skills effectively. I received interview requests from companies I'd always wanted to work for!"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-card to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Success Stories</h1>
              <p className="text-lg text-muted-foreground">
                Hear from professionals who found their dream careers through CareerQuest
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg opacity-90">
                Join thousands of professionals who have found their dream careers
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
