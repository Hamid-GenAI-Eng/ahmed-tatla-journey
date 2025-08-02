import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Digital Marketing Certificate",
      organization: "JDC FREE IT CITY LAHORE",
      date: "Dec 2024 - Feb 2025",
      registrationNo: "FL-L02-04240",
      description: "Comprehensive course covering digital marketing strategies, Meta Ads, social media marketing, and conversion optimization.",
      skills: ["Digital Marketing", "Meta Ads", "Social Media Marketing", "Campaign Optimization"],
      type: "Marketing",
      image: "/lovable-uploads/631dd01f-98c8-4dba-a8b0-55063748508e.png"
    },
    {
      title: "MERN Stack Development",
      organization: "BANO QABIL (PITB)",
      date: "Mar 2024",
      registrationNo: "24-01-1",
      description: "6-month intensive course covering MongoDB, Express.js, React, and Node.js for full-stack web development.",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Full-Stack Development"],
      type: "Development",
      image: "/lovable-uploads/2f027736-a746-4679-9bc6-50dfd30d4c9a.png"
    },
    {
      title: "Web Development Certificate",
      organization: "BANO QABIL (PITB)",
      date: "Sep 2024",
      registrationNo: "24-05-5",
      description: "Advanced web development course focusing on modern frameworks and industry best practices.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Modern Frameworks"],
      type: "Development",
      image: "/lovable-uploads/e63fefa6-5ffd-456c-b560-3bffafffaa78.png"
    }
  ];

  const additionalTraining = [
    {
      title: "C++ Development Internship",
      organization: "AICP (Online)",
      duration: "3 Months",
      description: "Intensive C++ programming internship focusing on data structures, algorithms, and object-oriented programming."
    },
    {
      title: "SEO & Digital Marketing",
      organization: "NAVTTC",
      duration: "Completed",
      description: "Professional SEO training covering technical SEO, keyword research, content optimization, and ranking strategies."
    }
  ];

  const getTypeColor = (type: string) => {
    return type === "Development" ? "bg-accent/10 text-accent" : "bg-success/10 text-success";
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Certifications & Training
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development through recognized institutions 
              and industry-leading programs in technology and digital marketing.
            </p>
          </div>

          {/* Main Certifications */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-elegant transition-all duration-300 group overflow-hidden"
              >
                {cert.image && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="w-5 h-5 text-accent" />
                        <Badge className={`text-xs ${getTypeColor(cert.type)}`}>
                          {cert.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-foreground leading-tight">
                        {cert.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  
                  {cert.registrationNo && (
                    <div className="text-xs text-muted-foreground">
                      Reg. No: {cert.registrationNo}
                    </div>
                  )}
                  
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-foreground">Skills Acquired:</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
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

          {/* Additional Training */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">
              Additional Training & Internships
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {additionalTraining.map((training, index) => (
                <Card 
                  key={index} 
                  className="shadow-soft hover:shadow-elegant transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-foreground">{training.title}</h4>
                        <p className="text-sm text-muted-foreground">{training.organization}</p>
                        <Badge variant="outline" className="text-xs">
                          {training.duration}
                        </Badge>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {training.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievement Summary */}
          <div className="mt-16">
            <Card className="shadow-elegant bg-gradient-hero text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-3xl mx-auto">
                  My commitment to professional development has equipped me with a diverse skill set 
                  spanning full-stack development, digital marketing, and business strategy. 
                  Each certification represents hands-on learning and real-world application.
                </p>
                <div className="flex justify-center space-x-8 mt-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-sm text-primary-foreground/80">Certifications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">12+</div>
                    <div className="text-sm text-primary-foreground/80">Months Training</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">3+</div>
                    <div className="text-sm text-primary-foreground/80">Institutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};