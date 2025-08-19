import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center animated-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-glow">
            Hi, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Nengjia Li
            </span>
            {" "}— Engineer, Maker, and Robotics Innovator.
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary mb-8 font-light">
            Incoming Computer Engineering student at the University of Waterloo. Passionate about{" "}
            <span className="text-accent-primary font-medium">AI</span>,{" "}
            <span className="text-accent-primary font-medium">robotics</span>, and{" "}
            <span className="text-accent-primary font-medium">building real-world solutions</span>.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <Button 
            className="btn-hero-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Projects
          </Button>
          <Button 
            className="btn-hero-secondary"
            onClick={() => scrollToSection('socials')}
          >
            Connect With Me
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://github.com/Ninjtheturtle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <Github size={24} />
          </a>
          <a 
            href="mailto:nengjiali@gmail.com"
            className="social-link"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            size={24} 
            className="text-text-secondary cursor-pointer hover:text-accent-primary transition-colors" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;