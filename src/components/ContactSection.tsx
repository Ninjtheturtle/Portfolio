import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-background-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text-primary">Let's talk about your next project</h3>
              <p className="text-text-secondary leading-relaxed">
                I'm always interested in hearing about new opportunities, 
                whether it's a full-time role, consulting work, or just a 
                coffee chat about technology and innovation.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-text-secondary">
                <MapPin className="w-5 h-5 text-accent-primary" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                <Clock className="w-5 h-5 text-accent-primary" />
                <span>PST (UTC-8) - Usually respond within 24 hours</span>
              </div>
            </div>
            
            <div className="p-6 bg-card border border-border rounded-xl">
              <h4 className="font-semibold text-text-primary mb-2">Open to opportunities in:</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>• AI/ML Engineering roles</li>
                <li>• Robotics and automation projects</li>
                <li>• Full-stack development consulting</li>
                <li>• Technical mentoring and advisory</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="project-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-text-primary">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background-secondary border-border text-text-primary focus:border-accent-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-text-primary">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background-secondary border-border text-text-primary focus:border-accent-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-text-primary">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background-secondary border-border text-text-primary focus:border-accent-primary resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero-primary"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;