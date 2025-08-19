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
            I’m Nengjia Li, passionate about building at the intersection of{" "}
            <span className="text-accent-primary font-semibold">
              AI and engineering
            </span>{" "}
            — from fine-tuning LLMs to real-time robotics systems. I led an FTC
            team to #1 in Ontario, founded an NPO to bring STEM to 2,000+
            students, and am now headed to Waterloo Computer Engineering to keep
            exploring how AI can transform how we build and connect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
