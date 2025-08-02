import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Users, Code, Briefcase } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      icon: Briefcase,
      title: "CodeEnvision Platform",
      category: "Startup",
      description: "A comprehensive platform providing real-world internships and training in MERN Stack, AI, and ML. Connecting students with practical learning opportunities and industry experience.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "AI/ML Integration"],
      features: [
        "Student onboarding system",
        "Project assignment portal",
        "Progress tracking dashboard",
        "Mentor-student communication",
        "Certificate generation"
      ],
      status: "Live & Growing",
      impact: "50+ Students Trained"
    },
    {
      icon: TrendingUp,
      title: "E-commerce Success Stories",
      category: "Business",
      description: "Multiple e-commerce ventures generating 10+ Lakh PKR in revenue through strategic digital marketing, SEO optimization, and customer acquisition strategies.",
      technologies: ["SEO", "Meta Ads", "Google Analytics", "Conversion Optimization"],
      features: [
        "Multi-channel marketing campaigns",
        "SEO-driven organic traffic",
        "Social media advertising",
        "Customer retention strategies",
        "Revenue optimization"
      ],
      status: "Ongoing Success",
      impact: "10+ Lakh PKR Revenue"
    },
    {
      icon: Code,
      title: "SEO Automation Tools",
      category: "Development",
      description: "Custom-built SEO tools and scripts for automating keyword research, content optimization, and technical SEO audits for multiple client websites.",
      technologies: ["Python", "JavaScript", "SEO APIs", "Data Analytics"],
      features: [
        "Automated keyword research",
        "Content optimization suggestions",
        "Technical SEO audits",
        "Competitor analysis",
        "Ranking tracking"
      ],
      status: "Client Success",
      impact: "Multiple Websites Ranked"
    },
    {
      icon: Users,
      title: "Digital Marketing Campaigns",
      category: "Marketing",
      description: "Successfully managed and executed digital marketing campaigns for various clients, focusing on Meta Ads, organic growth, and conversion optimization.",
      technologies: ["Meta Business Manager", "Google Ads", "Analytics", "CRM Systems"],
      features: [
        "Campaign strategy development",
        "Ad creative optimization",
        "Audience targeting",
        "ROI tracking and reporting",
        "A/B testing implementation"
      ],
      status: "Proven Results",
      impact: "High ROI Campaigns"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Startup": "bg-accent/10 text-accent",
      "Business": "bg-success/10 text-success",
      "Development": "bg-primary/10 text-primary",
      "Marketing": "bg-orange-500/10 text-orange-600"
    };
    return colors[category as keyof typeof colors] || "bg-muted/10 text-muted-foreground";
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Projects & Ventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From founding my own startup to generating significant e-commerce revenue, 
              here are the projects that showcase my entrepreneurial and technical capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-elegant transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <project.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={`text-xs ${getCategoryColor(project.category)}`}>
                            {project.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {project.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-accent">{project.impact}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-foreground/70 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.title === "CodeEnvision Platform" && (
                    <div className="flex space-x-3 pt-4">
                      <Button variant="hero" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Platform
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="shadow-elegant bg-gradient-hero text-primary-foreground max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Want to Build Something Amazing?</h3>
                <p className="text-primary-foreground/90 mb-6">
                  I'm always excited to take on new challenges and collaborate on innovative projects. 
                  Let's discuss how we can create something impactful together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    View More Projects
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Start a Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};