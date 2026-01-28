import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
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
        <ExperienceList />
      </div>
    </section>
  );
};

// Separate component to manage expand/collapse state cleanly
const ExperienceList = () => {
  const [openStates, setOpenStates] = useState<boolean[]>(
    new Array(experiences.length).fill(false)
  );

  const toggle = (i: number) => {
    setOpenStates((s) => {
      const next = [...s];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <div className="flex flex-col">
      {experiences.map((exp, idx) => {
        const open = openStates[idx];

        return (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            onClick={() => toggle(idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(idx);
              }
            }}
            className={`group rounded-lg transition-colors duration-200 bg-transparent cursor-pointer`}
          >
            <div className="flex items-center gap-3 px-2 py-3">
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

              <div className="flex-1 flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg transition-colors duration-200">
                    {exp.company}
                  </span>

                  {/* Chevron — visible on hover or when open */}
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(idx);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        e.stopPropagation();
                        toggle(idx);
                      }
                    }}
                    className={`ml-1 inline-flex items-center justify-center w-6 h-6 p-1 rounded-md text-muted-foreground hover:text-zinc-600 focus:outline-none transition-all duration-200 ${
                      open ? "opacity-100 rotate-90" : "opacity-0 group-hover:opacity-100 group-hover:-rotate-6"
                    }`}
                  >
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300`} />
                  </button>
                </div>

                <div className="ml-auto text-muted-foreground text-sm text-right">
                  {exp.role}
                </div>
              </div>
            </div>

            {/* Collapsible details */}
            <div
              className={`px-2 transition-all duration-300 ${
                open ? "max-h-[800px] opacity-100 py-3 overflow-visible" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="text-zinc-700 dark:text-zinc-200 text-sm leading-relaxed max-w-3xl transition-colors duration-200">
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
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs rounded-md shadow-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        <div className="font-medium">{link.repo}</div>
                        <div className="text-xs opacity-75">Click to view PR</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
                      </div>
                    </span>
                  ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-1 text-xs">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
