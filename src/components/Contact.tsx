import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmed.sarfaraz@codeenvision.com",
      link: "mailto:ahmed.sarfaraz@codeenvision.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      link: null
    },
    {
      icon: Phone,
      label: "Available",
      value: "24/7 for opportunities",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "#",
      color: "hover:text-gray-800"
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:ahmed.sarfaraz@codeenvision.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on your next project? Looking for internship opportunities? 
              Or just want to connect with a fellow entrepreneur? Let's start the conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="transition-all duration-300 focus:shadow-soft"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="transition-all duration-300 focus:shadow-soft"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about your project, opportunity, or how we can collaborate..."
                        required
                        rows={6}
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="premium" 
                      size="lg"
                      className="w-full"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-foreground hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Connect with Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        asChild
                        className={`transition-all duration-300 ${social.color}`}
                      >
                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                          <social.icon className="w-5 h-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Download Resume */}
              <Card className="shadow-elegant bg-gradient-hero text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold mb-3">Download My Resume</h4>
                  <p className="text-primary-foreground/90 text-sm mb-4">
                    Get a detailed overview of my experience, skills, and achievements.
                  </p>
                  <Button 
                    variant="outline"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-center">Quick Stats</h4>
                  <div className="space-y-3 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">24h</div>
                      <div className="text-xs text-muted-foreground">Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">50+</div>
                      <div className="text-xs text-muted-foreground">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">100%</div>
                      <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};