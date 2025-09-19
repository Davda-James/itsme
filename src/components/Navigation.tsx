import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onHireClick: () => void;
  showName?: boolean;
}

const Navigation = ({ onHireClick, showName }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Open Source", href: "#open-source" },
    { name: "Projects", href: "#projects" },
  // { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-glass border-b border-white/10 shadow-elegant" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center w-full justify-between">
            {/* Logo - Fixed width to prevent layout shift */}
            <button 
              onClick={() => scrollToSection('#home')} 
              className="text-2xl font-bold font-inter bg-transparent border-none cursor-pointer pl-2 pr-4 text-left"
              style={{ minWidth: 72 }}
            >
              <span className={`transition-opacity duration-300 ${showName ? 'opacity-100' : 'opacity-0'} text-foreground`}
                style={{ letterSpacing: '0.05em' }}>
                James
              </span>
            </button>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
            {/* CTA Button & Theme Toggle (desktop only) */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Button 
                variant="outline" 
                className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-primary hover:text-primary focus:text-primary active:text-primary"
                onClick={onHireClick}
              >
                Hire Me
              </Button>
            </div>
            {/* ThemeToggle for mobile (always visible at top right) */}
            <div className="flex lg:hidden items-center">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4 bg-card/30 backdrop-blur-glass border border-white/10 rounded-2xl p-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 py-2 text-left bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 mt-4 text-white hover:text-white focus:text-white active:text-white"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onHireClick();
                }}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;