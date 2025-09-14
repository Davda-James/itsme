import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

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
            About <span className="text-foreground">Me</span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            What drives me is the thrill of building something from nothing—and knowing it actually helps someone.
          </p>
        </div>
        
  <div className="flex justify-center items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                I'm a pre-final year Computer Science student at IIT Mandi who finds joy in turning ideas into working systems. I enjoy building things with code, especially projects that solve real problems or explore new ideas. My interests span backend systems, AI/DL, and blockchain, and I like learning by doing—whether it's through hackathons, internships, or personal projects.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;