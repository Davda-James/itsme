import { Badge } from "@/components/ui/badge";
import { Description } from "@radix-ui/react-toast";
import { TextCursor } from "lucide-react";
import gssocImage from "@/assets/experiences/gssoc.jpg";
import ackeeImage from "@/assets/experiences/ackee.png";
import hacktoberfestImage from "@/assets/experiences/hacktoberfest.jpg";

const experiences = [
  {
    company: "Hacktoberfest 2024 & 2025",
    logo: hacktoberfestImage,
    role: "October 2024 & October 2025",
    description: "Contributions to various projects, Super Contributor 2k25, ",
    technologies: ["Rust", "Python", "Gemini", "Tkinter", "OpenWeatherMap API"],
    url: "https://www.holopin.io/@neuron#badges",
    links: [
      {
        alias: "#PR1072",
        url: "https://github.com/cocoindex-io/cocoindex/pull/1072",
        repo: "cocoindex",
      },
      {
        alias: "#PR1105",
        url: "https://github.com/cocoindex-io/cocoindex/pull/1105",
        repo: "cocoindex",
      },
      {
        alias: "#PR1120",
        url: "https://github.com/cocoindex-io/cocoindex/pull/1120",
        repo: "cocoindex",
      },
      {
        alias: "#PR1073",
        url: "https://github.com/cocoindex-io/cocoindex/pull/1073",
        repo: "cocoindex",
      },
      {
        alias: "#PR1082",
        url: "https://github.com/cocoindex-io/cocoindex/pull/1082",
        repo: "cocoindex",
      },
      {
        alias: "#PR1081",
        url: "https://github.com/cocoindex-io/cocoindex/pull/1081",
        repo: "cocoindex",
      },
      {
        alias: "#PR11998",
        url: "https://github.com/gradio-app/gradio/pull/11998",
        repo: "gradio",
      },
      {
        alias: "#PR12000",
        url: "https://github.com/gradio-app/gradio/pull/12000",
        repo: "gradio",
      },
      {
        alias: "#PR991",
        url: "https://github.com/python-geeks/Automation-scripts/pull/991",
        repo: "Automation-scripts",
      },
      {
        alias: "#PR963",
        url: "https://github.com/python-geeks/Automation-scripts/pull/963",
        repo: "Automation-scripts",
      },
    ],
  },
  {
    company: "Ackee Blockchain (School of Solana Season 8)",
    // logo: "@/assets/experiences/ackee.png",
    logo: ackeeImage,
    role: "October - December 2025",
    description: "Learnt solana blockchain",
    technologies: ["Rust", "Solana", "Blockchain"],
    url: "https://ackee.xyz",
  },
  {
    company: "GirlScript Summer of Code (GSSoC)",
    logo: gssocImage,
    role: "June 2023",
    description:
      "First open source contribution: Standardized dependency versions, implemented Frequency vs Energy plot for real-time audio using Fourier Coefficients, and integrated it into the existing GUI",
    technologies: [
      "Python",
      "Mathematical Modelling",
      "Fourier Transform",
      "Data Visualization",
    ],
    url: "https://gssoc.girlscript.tech/",
    links: [
      {
        alias: "#PR94",
        url: "https://github.com/Soumya-Kushwaha/SoundScape/pull/94",
        repo: "SoundScape",
      },
    ],
  },
];

// Utility to compute the initial for a fallback avatar
const getInitial = (name: string) => {
  const trimmed = (name || "").trim();
  if (!trimmed) return "";
  // pick the first alphanumeric character from the first word
  const firstWord = trimmed.split(/\s+/)[0];
  const match = firstWord.match(/[A-Za-z0-9]/);
  return (match ? match[0] : firstWord[0]).toUpperCase();
};

const Experience = () => {
  return (
    <section id="experience" className="py-4 mb-4">
      <div className="w-full max-w-3xl mx-auto">
        <h2
          className="text-2xl font-bold mb-3 transition-colors cursor-pointer hover:text-primary/70"
          id="experience"
        >
          <a
            href="#experience"
            className="hover:text-primary/70 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experiences
          </a>
        </h2>
        <div className="flex flex-col gap-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  window.open(exp.url, "_blank", "noopener");
              }}
              onClick={() => window.open(exp.url, "_blank", "noopener")}
              className="block rounded-lg transition-colors duration-200 group px-2 py-2 cursor-pointer"
            >
              <div className="flex items-center mb-1 gap-3">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 rounded-full object-cover"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`${exp.company} logo initial`}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-muted-foreground dark:text-zinc-200 font-semibold"
                  >
                    {getInitial(exp.company)}
                  </div>
                )}
                <span className="font-semibold text-lg flex-1 group-hover:text-zinc-500 group-active:text-zinc-400 transition-colors duration-200">
                  {exp.company}
                </span>
                <span className="text-muted-foreground text-base text-right group-hover:text-zinc-500 group-active:text-zinc-400 transition-colors duration-200">
                  {exp.role}
                </span>
              </div>
              <div className="text-zinc-700 dark:text-zinc-200 text-sm leading-relaxed max-w-3xl group-hover:text-zinc-500 group-active:text-zinc-400 dark:group-hover:text-zinc-300 dark:group-active:text-zinc-400 transition-colors duration-200">
                {exp.description}
                {exp.links &&
                  exp.links.map((link, linkIdx) => (
                    <span
                      key={linkIdx}
                      className="relative inline-block ml-1 group/tooltip"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary underline hover:text-primary/80 transition-colors"
                      >
                        {link.alias}
                      </a>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs rounded-md shadow-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        <div className="font-medium">{link.repo}</div>
                        <div className="text-xs opacity-75">
                          Click to view PR
                        </div>
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
                      </div>
                    </span>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
