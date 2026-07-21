import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

const SectionHeading = ({ id, children, className }: SectionHeadingProps) => {
  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <h2 className={cn("text-xl sm:text-2xl font-bold mb-4 sm:mb-6", className)}>
      <a
        href={`#${id}`}
        onClick={scrollToSection}
        className="transition-colors hover:text-primary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
      >
        {children}
      </a>
    </h2>
  );
};

export default SectionHeading;
