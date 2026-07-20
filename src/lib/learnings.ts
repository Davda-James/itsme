import gssocImage from "@/assets/experiences/gssoc.jpg";
import ackeeImage from "@/assets/experiences/ackee.png";
import turbin3Image from "@/assets/experiences/turbin3.jpeg";
import rektoffImage from "@/assets/experiences/rektoff.png";
import hacktoberfestImage from "@/assets/experiences/hacktoberfest.jpg";

export type LearningLink = {
  alias: string;
  url: string;
  repo: string;
};

export type Learning = {
  company: string;
  logo?: string;
  timeline: string;
  role: string;
  description: string;
  technologies: string[];
  url?: string;
  links?: LearningLink[];
};

export const learnings: Learning[] = [
  {
    company: "Rektoff",
    logo: rektoffImage,
    timeline: "January - February 2026",
    role: "Bootcamp Fellow",
    description:
      "Selected among 125 students for a 6 week Solana Security Bootcamp.",
    technologies: ["Rust", "Solana", "Security", "Auditing"],
    url: "https://www.rektoff.xyz/",
  },
  {
    company: "Turbin3",
    logo: turbin3Image,
    timeline: "January - February 2026",
    role: "Async Builder",
    description:
      "Async Builders Q1 2026, 6 week cohort focused on building on Solana.",
    technologies: ["Rust", "Solana", "Blockchain"],
    url: "https://www.turbin3.org/",
  },
  {
    company: "Hacktoberfest 2024 & 2025",
    logo: hacktoberfestImage,
    role: "Open Source Contributor",
    timeline: "October 2024 & 2025",
    description: "Contributions to various projects, Super Contributor 2k25.",
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
    company: "Ackee Blockchain",
    logo: ackeeImage,
    role: "School of Solana Season 8",
    timeline: "October - December 2025",
    description: "Learnt Solana blockchain.",
    technologies: ["Rust", "Solana", "Blockchain"],
    url: "https://ackee.xyz",
  },
  {
    company: "GirlScript Summer of Code (GSSoC)",
    logo: gssocImage,
    role: "Open Source Contributor",
    timeline: "June 2023",
    description:
      "First open source contribution: Standardized dependency versions, implemented Frequency vs Energy plot for real-time audio using Fourier Coefficients, and integrated it into the existing GUI.",
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
