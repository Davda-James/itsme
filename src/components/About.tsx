import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  const highlights = [
    {
      icon: Code,
      title: "Innovation",
      description: "Driving technological evolution by crafting code that challenges conventions, embraces curiosity, and unlocks new possibilities."
    },
    {
      icon: Palette,
      title: "Curiosity",
      description: "Fostering a culture of exploration and creativity, where every line of code is a step towards discovering innovative solutions."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams to deliver exceptional results on time."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-inter mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What drives me is the thrill of building something from nothing—and knowing it actually helps someone.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a pre-final year Computer Science student at IIT Mandi who finds joy in turning ideas into working systems. I enjoy building things with code, especially projects that solve real problems or explore new ideas. My interests span backend systems, AI/DL, and blockchain, and I like learning by doing—whether it's through hackathons, internships, or personal projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects. 
              </p>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div 
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="p-6 bg-card/30 backdrop-blur-glass border border-white/10 hover:bg-card/50 hover:shadow-glow transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="h-6 w-6 text-background" />
                  </div>
                  <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;