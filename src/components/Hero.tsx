import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import heroImage from "@/assets/hero-image.jpg";

const Hero = ({ headingRef }: { headingRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-16 md:pt-8">
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">Hello, I'm</p>
              <div className="space-y-2">
                <h1 ref={headingRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold font-inter leading-tight">
                  <span className="text-foreground">
                    James Davda
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  
                </h2>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              I like building things that work well and matter. Whether it's code or architecture, I focus on making it clear, simple, and useful.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                Download CV
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Davda-James" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card/50 backdrop-blur-glass border border-white/10 hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group">
                <SiGithub className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/james-davda/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card/50 backdrop-blur-glass border border-white/10 hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group">
                <FaLinkedinIn className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:connect@0xjames.me" className="p-3 rounded-full bg-card/50 backdrop-blur-glass border border-white/10 hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Image */}
          {/* <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow-pulse"></div>
            <div className="relative bg-card/30 backdrop-blur-glass border border-white/10 rounded-3xl p-8 shadow-elegant">
                <img 
                  src={heroImage} 
                  alt="James Davda"
                  className="w-80 h-80 object-cover rounded-2xl"
                  />
                  </div>
                  </div>
                  </div>
                  </div> */}
          </div>
        </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;