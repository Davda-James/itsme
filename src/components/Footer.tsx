import { Mail, Heart } from "lucide-react";
import { SiGithub, SiDiscord, SiX } from '@icons-pack/react-simple-icons';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/Davda-James", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/james-davda", label: "LinkedIn" },
    { icon: SiDiscord, href: "https://discord.gg/ztHthFZr", label: "Discord" },
    { icon: Mail, href: "mailto:connect@0xjames.me", label: "Email" },
    { icon: SiX, href: "https://x.com/0xbondj", label: "X" },
  ];

  return (
    <footer className="border-t border-white/10 bg-card/30 backdrop-blur-glass">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              A boy who loves tinkering.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-background/50 border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by James 
            </p>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-muted-foreground text-xs">
            Designed & Built with lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;