import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap, Building2, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    { icon: User, label: "Age", value: "21 Years Old" },
    { icon: GraduationCap, label: "Education", value: "BSc CS - 5th Semester" },
    { icon: Building2, label: "Company", value: "CodeEnvision Founder" },
    { icon: Target, label: "Mission", value: "Empowering Through Tech" }
  ];

  const skills = [
    "Full-Stack Development", "MERN Stack", "AI & Machine Learning", 
    "SEO & Digital Marketing", "E-commerce Strategy", "Team Leadership",
    "Project Management", "Business Development"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driven by passion, powered by innovation, and committed to making a difference 
              in the tech industry while empowering others along the journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a 21-year-old Computer Science student from Pakistan, currently in my 5th semester at UMT. 
                  My entrepreneurial journey began with generating over <span className="text-accent font-semibold">10 Lakh PKR+</span> through 
                  e-commerce ventures, which taught me the fundamentals of business and digital marketing.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  This success motivated me to establish <span className="text-accent font-semibold">CodeEnvision</span>, 
                  a tech startup focused on providing real-world internships and training in MERN Stack, AI, and ML. 
                  My mission is to bridge the gap between academic learning and industry requirements.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  With over 6+ months of professional SEO experience and expertise in digital marketing, 
                  I combine technical skills with business acumen to create scalable solutions that make a lasting impact.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats & Highlights */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      <div className="text-lg font-semibold text-foreground">{item.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="shadow-elegant bg-gradient-hero text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h4 className="text-2xl font-bold mb-4">CodeEnvision</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    My tech startup providing internships and real-world training to bridge 
                    the gap between academic learning and industry demands. Empowering students 
                    with practical skills in MERN Stack, AI, and ML.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};