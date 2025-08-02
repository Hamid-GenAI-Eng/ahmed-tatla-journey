import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Search, Award, Users } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      icon: TrendingUp,
      title: "E-commerce Success",
      duration: "2022 - Present",
      company: "Self-Employed",
      achievement: "Generated 10+ Lakh PKR in sales",
      description: "Built and scaled e-commerce ventures from scratch, mastering digital marketing strategies, customer acquisition, and business operations.",
      skills: ["E-commerce Strategy", "Digital Marketing", "Sales Optimization", "Customer Analytics"]
    },
    {
      icon: Search,
      title: "SEO Specialist",
      duration: "6+ Months",
      company: "Professional Experience",
      achievement: "Comprehensive SEO expertise",
      description: "Delivered end-to-end SEO solutions including technical audits, content strategy, keyword research, and ranking optimization for new websites.",
      skills: ["On-page SEO", "Technical SEO", "Keyword Research", "Content Strategy", "SEO Audits", "Meta Optimization"]
    },
    {
      icon: Users,
      title: "Startup Founder",
      duration: "2023 - Present",
      company: "CodeEnvision",
      achievement: "Leading tech education startup",
      description: "Founded and leading CodeEnvision to provide real-world internships and training in MERN Stack, AI, and ML, bridging the academic-industry gap.",
      skills: ["Leadership", "Team Management", "Business Development", "Strategic Planning"]
    },
    {
      icon: Award,
      title: "Digital Marketing Expert",
      duration: "Ongoing",
      company: "Multiple Clients",
      achievement: "Meta Ads & Growth Specialist",
      description: "Specialized in Meta advertising campaigns, organic traffic generation, social media growth, and conversion optimization strategies.",
      skills: ["Meta Ads", "Social Media Growth", "Traffic Generation", "Conversion Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From e-commerce success to tech leadership, here's how I've built expertise 
              across multiple domains while creating value and opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-elegant transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <exp.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <p className="font-semibold text-accent">{exp.achievement}</p>
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="shadow-elegant bg-gradient-hero text-primary-foreground max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
                <p className="text-primary-foreground/90 mb-6">
                  Let's discuss how my experience in e-commerce, SEO, and tech leadership 
                  can contribute to your next project or venture.
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
                >
                  Start a Conversation
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};