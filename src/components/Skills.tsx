import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiBun,
  SiSolidity,
  SiRust,
} from "@icons-pack/react-simple-icons";
import SectionHeading from "@/components/SectionHeading";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Solidity", icon: SiSolidity },
  { name: "Rust", icon: SiRust },
  { name: "Tensorflow", icon: SiTensorflow },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "bun", icon: SiBun },
  { name: "Express.js", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Docker", icon: SiDocker },
] as const;

const Skills = () => {
  return (
    <section id="skills" className="py-6 sm:py-8" aria-labelledby="skills-heading">
      <SectionHeading id="skills">
        <span id="skills-heading">Skills</span>
      </SectionHeading>

      <ul className="flex flex-wrap gap-2 sm:gap-2.5 list-none p-0 m-0">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <li
              key={skill.name}
              className="inline-flex items-center gap-1.5 sm:gap-2 h-8 px-2.5 sm:px-3 border border-border bg-card rounded-md text-sm font-medium"
            >
              <Icon className="size-4 sm:size-5 shrink-0" aria-hidden />
              <span>{skill.name}</span>
            </li>
          );
        })}
      </ul>

      <p className="text-muted-foreground text-sm sm:text-base mt-4 sm:mt-5">
        Learning <span className="font-semibold text-foreground">Rust</span> and{" "}
        <span className="font-semibold text-foreground">Solana</span>
      </p>
    </section>
  );
};

export default Skills;
