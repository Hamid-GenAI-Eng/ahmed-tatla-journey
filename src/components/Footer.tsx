import { Button } from "@/components/ui/button";
import { Heart, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Mission */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">Ahmed Sarfaraz Tatla</div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Building the future through technology and empowering others with 
                real-world opportunities. Join me on this journey of innovation and growth.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <div>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    About Me
                  </button>
                </div>
                <div>
                  <button 
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Experience
                  </button>
                </div>
                <div>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Projects
                  </button>
                </div>
                <div>
                  <button 
                    onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Certifications
                  </button>
                </div>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="space-y-3">
                <p className="text-primary-foreground/80">
                  Ready to collaborate or explore opportunities?
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-primary-foreground/70 text-sm">
                © {currentYear} Ahmed Sarfaraz Tatla. All rights reserved.
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/70 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>for innovation and growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};