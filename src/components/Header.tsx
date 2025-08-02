import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Ahmed Sarfaraz
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('certifications')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-4"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('certifications')} 
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Certifications
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};