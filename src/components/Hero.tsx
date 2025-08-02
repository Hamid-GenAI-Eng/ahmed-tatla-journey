import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Linkedin, Github } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/50 to-accent/5 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-glow border-4 border-accent/20 animate-float">
                <img 
                  src="/lovable-uploads/18f9de3e-a3d9-4714-b5a7-4e6884cf7d9d.png" 
                  alt="Ahmed Sarfaraz Tatla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-success rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-success-foreground rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Ahmed Sarfaraz Tatla
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Entrepreneur • Full-Stack Developer • AI Enthusiast
              </h2>
            </div>

            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              21-year-old Pakistani tech entrepreneur building 
              <span className="text-accent font-semibold"> CodeEnvision</span> to empower the next generation 
              through internships, training, and innovative AI solutions. 
              <span className="text-accent font-semibold"> 10+ Lakh PKR</span> in e-commerce success and counting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                variant="premium" 
                size="xl" 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="w-full sm:w-auto"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-6">
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Github className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Mail className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => scrollToSection('about')}
              className="rounded-full"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};