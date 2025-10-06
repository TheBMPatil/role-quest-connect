import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click the 'Get Started' button on the homepage, choose your role (Student or Recruiter), and fill in your details. You'll receive a confirmation email to verify your account."
        },
        {
          q: "What's the difference between Student and Recruiter accounts?",
          a: "Student accounts are for job seekers looking for opportunities. Recruiter accounts are for employers posting jobs and managing applications. Each has a different dashboard and features."
        },
        {
          q: "Is CareerQuest free to use?",
          a: "Yes! Students can use CareerQuest completely free. Recruiters have a free tier with limited postings, and paid plans for more features."
        }
      ]
    },
    {
      category: "For Job Seekers",
      questions: [
        {
          q: "How do I apply for a job?",
          a: "Browse jobs, click on a listing that interests you, review the details, and click 'Apply Now'. Make sure your profile and resume are up to date before applying."
        },
        {
          q: "Can I track my applications?",
          a: "Yes! Your Student Dashboard shows all your applications with their current status. You'll also receive email notifications when your application status changes."
        },
        {
          q: "How do I improve my profile visibility?",
          a: "Complete all sections of your profile, upload a professional resume, add relevant skills, and keep your information updated. Profiles with more details get better job matches."
        }
      ]
    },
    {
      category: "For Recruiters",
      questions: [
        {
          q: "How do I post a job?",
          a: "From your Recruiter Dashboard, click 'Post New Job', fill in the job details including title, description, requirements, and salary range, then publish."
        },
        {
          q: "How many jobs can I post?",
          a: "Free accounts can post up to 2 jobs per month. Professional plans allow 10 jobs, and Enterprise plans offer unlimited postings."
        },
        {
          q: "How do I review applications?",
          a: "Go to your Recruiter Dashboard and click on any job posting to see all applicants. You can filter by match percentage, review profiles, and contact candidates directly."
        }
      ]
    },
    {
      category: "Account & Billing",
      questions: [
        {
          q: "How do I upgrade my plan?",
          a: "Visit the Pricing page, select your desired plan, and follow the checkout process. Your upgrade takes effect immediately."
        },
        {
          q: "Can I cancel my subscription?",
          a: "Yes, you can cancel anytime from Settings > Account. Your access continues until the end of your billing period."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Enterprise plans."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "I forgot my password. What should I do?",
          a: "Click 'Forgot Password' on the login page, enter your email, and we'll send you a reset link. Follow the instructions in the email to create a new password."
        },
        {
          q: "Why can't I upload my resume?",
          a: "Make sure your resume is in PDF, DOC, or DOCX format and under 5MB. If issues persist, try a different browser or contact support."
        },
        {
          q: "How do I report a bug or issue?",
          a: "Use the Contact page to report issues, or email us at support@careerquest.com with details about the problem you're experiencing."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-card to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about CareerQuest
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for answers..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, qIdx) => (
                      <AccordionItem key={qIdx} value={`${idx}-${qIdx}`} className="border border-border rounded-lg px-4">
                        <AccordionTrigger className="text-left hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
