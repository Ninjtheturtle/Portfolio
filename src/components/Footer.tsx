import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#socials" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Ninjtheturtle",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/nengjiali",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Email",
      href: "mailto:nengjiali@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background-tertiary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3
              className="text-xl font-bold text-glow cursor-pointer"
              onClick={scrollToTop}
            >
              Nengjia Li
            </h3>
            <p className="text-text-secondary">
              Engineer & Maker, passionate about AI and robotics, turning ideas
              into real-world solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-text-secondary hover:text-accent-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={
                    link.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-text-secondary text-sm flex items-center justify-center">
            Designed & coded with{" "}
            <Heart className="w-4 h-4 mx-1 text-accent-primary" /> by Nengjia Li
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
