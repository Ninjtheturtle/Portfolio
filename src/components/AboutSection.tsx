import headshot from "@/assets/professional-headshot.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-text-secondary leading-relaxed">
            I'm passionate about creating at the intersection of{" "}
            <span className="text-accent-primary font-semibold">AI and engineering</span> — from fine-tuning large language models with LoRA/QLoRA and CUDA, to building real-time AI systems for hiring, pricing, and robotics. I've led an FTC robotics team to #1 in Ontario, founded the Scarborough STEM Alliance to bring STEM to 2,000+ students, and I'm headed to the University of Waterloo to keep exploring how AI can transform how we build, learn, and connect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;