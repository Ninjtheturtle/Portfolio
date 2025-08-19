import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Ninjtheturtle",
      icon: <Github className="w-6 h-6" />,
      description: "Check out my code"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/nengjiali",
      icon: <Linkedin className="w-6 h-6" />,
      description: "Let's connect professionally"
    },
    {
      name: "Email",
      url: "mailto:nengjiali@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      description: "Drop me a line"
    }
  ];

  return (
    <section id="socials" className="section-padding bg-background-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-glow">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group project-card text-center hover:shadow-accent/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-accent-primary group-hover:text-accent-secondary transition-colors mb-3 flex justify-center">
                {link.icon}
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{link.name}</h3>
              <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;