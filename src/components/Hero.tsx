import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedinIn } from 'react-icons/fa';

const Hero = ({ headingRef }: { headingRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <header className="pb-3 border-b border-muted-foreground/20">
      <div className="flex flex-col gap-2">
        <h1 ref={headingRef} className="text-3xl sm:text-4xl font-bold text-foreground">
          James Davda
        </h1>
        <p className="text-lg text-muted-foreground">Engineer</p>
      </div>
    </header>
  );
};

export default Hero;