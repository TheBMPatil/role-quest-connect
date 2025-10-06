import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Menu, X, LogOut, User, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { authStore } from "@/stores/authStore";
import { toast } from "sonner";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = authStore.getAuth();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    authStore.logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const getDashboardPath = () => {
    if (auth.user?.role === 'student') return '/student-dashboard';
    if (auth.user?.role === 'recruiter') return '/recruiter-dashboard';
    if (auth.user?.role === 'admin') return '/admin-dashboard';
    return '/';
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/cq_logo.png" alt="CareerQuest" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/jobs"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/jobs") ? "text-primary" : "text-foreground"
              }`}
            >
              Find Jobs
            </Link>
            {auth.user?.role !== 'recruiter' && (
              <Link
                to="/companies"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/companies") ? "text-primary" : "text-foreground"
                }`}
              >
                Companies
              </Link>
            )}
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            {auth.isAuthenticated ? (
              <>
                <Button variant="ghost" asChild className="gap-2">
                  <Link to={getDashboardPath()}>
                    <User className="h-4 w-4" />
                    {auth.user?.name}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {auth.user?.role}
                    </Badge>
                  </Link>
                </Button>
                <Button variant="ghost" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link
              to="/jobs"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Jobs
            </Link>
            {auth.user?.role !== 'recruiter' && (
              <Link
                to="/companies"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Companies
              </Link>
            )}
            <Link
              to="/about"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 pt-2 space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
              {auth.isAuthenticated ? (
                <>
                  <Button variant="outline" className="w-full justify-start gap-2" asChild>
                    <Link to={getDashboardPath()} onClick={() => setIsMobileMenuOpen(false)}>
                      <User className="h-4 w-4" />
                      {auth.user?.name}
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {auth.user?.role}
                      </Badge>
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
