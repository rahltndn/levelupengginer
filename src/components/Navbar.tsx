import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Startup Studio", to: "/startup-studio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const activeSection = useScrollSpy(
    ["hero", "courses", "why-us", "instructors", "testimonials", "startup-studio", "cta"],
    40 
  );
  const sectionToLink = {
    hero: "/",
    courses: "/courses",
    "why-us": "/about",
    instructors: "/about",
    testimonials: "/about",
    "startup-studio": "/startup-studio",
    cta: "/contact",
  };
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-card/95 backdrop-blur-md rounded-full border border-primary/30 shadow-lg px-6 py-3">
      <div className="flex h-10 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 mr-8">
          <img src={logo} alt="Level Up Engineers" className="h-8 w-8 rounded-lg object-cover" />
          <span className="font-display text-base font-bold text-foreground">Level Up Engineers</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive =
              (location.pathname === link.to && (link.to !== "/" || !activeSection || activeSection === "hero")) ||
              (link.to === "/courses" && location.pathname.startsWith("/courses")) ||
              (location.pathname === "/" && sectionToLink[activeSection] === link.to && activeSection !== "");

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary px-3 py-2 rounded-full hover:bg-primary/10 ${
                  isActive ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button asChild size="sm" className="rounded-full">
            <Link to="/contact">Book a Free Session</Link>
          </Button>
          <ThemeToggle className="rounded-full border border-border bg-background/70 hover:bg-accent" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="rounded-full border border-border bg-background/70 hover:bg-accent" />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 transition-colors hover:bg-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-md rounded-2xl border border-primary/30 shadow-lg p-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive =
                (location.pathname === link.to && (link.to !== "/" || !activeSection || activeSection === "hero")) ||
                (link.to === "/courses" && location.pathname.startsWith("/courses")) ||
                (location.pathname === "/" && sectionToLink[activeSection] === link.to && activeSection !== "");

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleNavClick}
                  className={`text-sm font-medium transition-all duration-200 px-4 py-3 rounded-xl hover:bg-primary/10 ${
                    isActive ? "text-primary bg-primary/10" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild className="w-full rounded-xl mt-2">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Book a Free Session
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
