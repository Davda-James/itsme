import sprinklr from "@/assets/experiences/sprinklr.png";

export type WorkExperience = {
  company: string;
  role: string;
  location: string;
  timeline: string;
  description: string[];
  technologies: string[];
  logo?: string;
  url?: string;
};

export const experiences: WorkExperience[] = [
  {
    company: "Sprinklr",
    role: "Product Engineering Intern",
    location: "On-Site",
    timeline: "June - July 2026",
    logo: sprinklr,
    description: ["Worked on Sprinklr Voice Internal Tool"],
    technologies: [
      "Node.js",
      "SQLite",
      "Python",
      "C++",
      "Typescript",
      "React",
      "WebRTC",
    ],
  },
];
