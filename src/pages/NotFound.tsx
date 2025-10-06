import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <div className="space-y-2">
            <h1 className="text-8xl font-bold text-primary">404</h1>
            <h2 className="text-3xl font-bold">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/jobs">
                <Search className="h-4 w-4 mr-2" />
                Browse Jobs
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
