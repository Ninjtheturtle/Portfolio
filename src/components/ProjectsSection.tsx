import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Store,
  Users,
  ArrowRightLeft,
  Code,
  Camera,
  Bot,
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Shopify AI Store Generator",
      description:
        "Fine-tuned GPT-Neo 1.3B with LoRA/QLoRA for store scaffolding, A/B testing engine, and Shopify integration.",
      techStack: [
        "Python",
        "Flask",
        "React",
        "Supabase",
        "Hugging Face",
        "CUDA",
        "Shopify API",
      ],
      icon: <Store className="w-6 h-6" />,
      githubUrl: "https://github.com/Ninjtheturtle/ShopifyLLM",
      demoUrl: "https://www.youtube.com/watch?v=MQk3Am4WlME",
      featured: true,
    },
    {
      title: "Shortlist.ai",
      description:
        "AI hiring system with resume–JD semantic matching, LLM voice interviews, and recruiter dashboard.",
      techStack: ["Flask", "Docker", "Supabase", "Twilio", "Gemini", "React"],
      icon: <Users className="w-6 h-6" />,
      githubUrl: "https://github.com/Ninjtheturtle/Shortlist.ai",

      featured: true,
    },
    {
      title: "ServiceSwap",
      description:
        "Real-time service-for-service exchange platform with semantic search and secure authentication.",
      techStack: [
        "Flask",
        "Socket.IO",
        "SQLAlchemy",
        "TailwindCSS",
        "Sentence Transformers",
      ],
      icon: <ArrowRightLeft className="w-6 h-6" />,
      githubUrl: "https://github.com/Ninjtheturtle/ServiceSwap",

      featured: false,
    },
    {
      title: "TaskFlow — Custom Programming Language",
      description:
        "Domain-specific robotics language with closures, functions, and AST generation.",
      techStack: ["Typescript", "Recursive Descent Parsing", "FSMs"],
      icon: <Code className="w-6 h-6" />,
      githubUrl: "https://github.com/Ninjtheturtle/TaskFlow",

      featured: false,
    },
    {
      title: "OpenCV Gimbal Tracker",
      description:
        "Camera follower robotics project with website integration and real-time tracking capabilities.",
      techStack: ["Java", "OpenCV", "Robotics"],
      icon: <Camera className="w-6 h-6" />,
      githubUrl: "https://github.com/Ninjtheturtle/OpenCV_Gimbal_Tracker",
      demoUrl: "https://www.youtube.com/watch?v=GT5896sdyHk",
      featured: false,
    },
    {
      title: "FTC Robotics",
      description:
        "Advanced robotics systems with autonomous pathing, motion profiling, and object detection. Led team to #1 in Ontario and top 25% at Worlds.",
      techStack: ["OpenCV", "TensorFlow", "PID Control", "Embedded Systems"],
      icon: <Bot className="w-6 h-6" />,
      githubUrl:
        "https://github.com/Ninjtheturtle/19498-Devolotics-Centerstage-2023-2024",
      demoUrl: "https://www.youtube.com/@Devolotics",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow">Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Building the future with AI, robotics, and innovative software
            solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card animate-fade-in ${
                project.featured ? "lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-accent-primary/10 rounded-lg text-accent-primary">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {project.title}
                </h3>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background-secondary text-accent-primary text-sm rounded-full border border-accent-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-accent-foreground"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button
                    size="sm"
                    className="bg-accent-primary hover:bg-accent-secondary text-accent-foreground"
                    asChild
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.title === "FTC Robotics" && (
                  <Button
                    size="sm"
                    className="bg-accent-secondary hover:bg-accent-primary text-accent-foreground"
                    asChild
                  >
                    <a
                      href="https://devolotics.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
