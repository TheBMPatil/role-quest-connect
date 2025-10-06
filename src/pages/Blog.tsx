import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Tips for Writing a Standout Resume",
      excerpt: "Learn how to create a resume that catches recruiters' attention and lands you interviews.",
      category: "Career Tips",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "📄"
    },
    {
      id: 2,
      title: "How to Ace Your Next Job Interview",
      excerpt: "Master the art of interviewing with these proven strategies and techniques.",
      category: "Interview Tips",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "💼"
    },
    {
      id: 3,
      title: "Remote Work: Best Practices for 2024",
      excerpt: "Discover the latest trends and tips for succeeding in a remote work environment.",
      category: "Remote Work",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "🏠"
    },
    {
      id: 4,
      title: "Negotiating Your Salary: A Complete Guide",
      excerpt: "Learn effective strategies for negotiating a better salary and benefits package.",
      category: "Career Growth",
      date: "March 8, 2024",
      readTime: "8 min read",
      image: "💰"
    },
    {
      id: 5,
      title: "Building Your Professional Network",
      excerpt: "Networking tips to help you connect with industry professionals and grow your career.",
      category: "Networking",
      date: "March 5, 2024",
      readTime: "5 min read",
      image: "🤝"
    },
    {
      id: 6,
      title: "Tech Industry Trends for 2024",
      excerpt: "Stay ahead of the curve with insights into the latest technology industry trends.",
      category: "Industry News",
      date: "March 1, 2024",
      readTime: "10 min read",
      image: "🚀"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-card to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Career Blog</h1>
              <p className="text-lg text-muted-foreground">
                Expert advice, industry insights, and career tips to help you succeed
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4">{post.image}</div>
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
