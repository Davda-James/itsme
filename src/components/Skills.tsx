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
  SiKeras,
  SiScikitlearn,
  SiBun,
  SiSolidity,
} from '@icons-pack/react-simple-icons';
import { Hash } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "Tensorflow", icon: SiTensorflow },
  { name: "Keras" , icon: SiKeras },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "bun", icon: SiBun },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Docker", icon: SiDocker },
  { name: "Solidity", icon: SiSolidity },
];

const Skills = () => {
  return (
    <section id="skills" className="py-8 mb-6">
      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6 transition-colors cursor-pointer hover:text-primary/70" id="skills">
          <a href="#skills" className="hover:text-primary/70 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Skills
          </a>
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 px-3 py-1 border border-muted-foreground/30 bg-white dark:bg-zinc-900 rounded-md text-base font-medium shadow-sm h-8 min-h-0"
              >
                <Icon className="w-5 h-5" />
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;