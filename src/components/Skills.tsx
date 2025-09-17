import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Database, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  const skillCategories = [
    {
      icon: Globe,
      title: "Frameworks and Libraries",
      description: "Modern frameworks and technologies for building scalable applications",
      skills: ["Express", "Node.js", "WebSockets", "PyTorch", "TensorFlow", "scikit-learn", "FastAPI", "ethers.js"],
  gradient: "bg-neutral-200/40 dark:bg-neutral-800/40"
    },
    {
      icon: Code,
      title: "Programming Languages",
      description: "Languages I use to bring ideas to life",
      skills: ["JavaScript", "TypeScript", "Python", "Solidity", "C++", "C"],
  gradient: "bg-neutral-200/40 dark:bg-neutral-800/40"
    },
    {
      icon: Database,
      title: "Data and Analytics",
      description: "Tools for managing and analyzing data",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Numpy", "Pandas", "Seaborn"],
  gradient: "bg-neutral-200/40 dark:bg-neutral-800/40"
    },
    {
      icon: Wrench,
      title: "Tools and Platforms",
      description: "Development tools and platforms I use daily",
      skills: ["Git", "Docker", "Vercel", "GitHub Actions", "Supabase", "Slack", "Notion"],
  gradient: "bg-neutral-200/40 dark:bg-neutral-800/40"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-inter mb-4">
            <span className="font-bold text-foreground">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical skills and tools I use for tinkering.
          </p>
        </div>

        <div 
          ref={categoriesRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`group relative overflow-hidden bg-card/30 backdrop-blur-glass border border-white/10 hover:bg-card/50 hover:shadow-elegant transition-all duration-1000 ${
                categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: categoriesVisible ? `${categoryIndex * 0.2}s` : '0s' }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${category.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`bg-neutral-100/80 dark:bg-white/10 text-foreground border border-neutral-300 dark:border-white/20 shadow-sm hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300 ${
                        categoriesVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                      }`}
                      style={{ 
                        animationDelay: categoriesVisible 
                          ? `${(categoryIndex * 0.2) + (skillIndex * 0.05)}s` 
                          : '0s' 
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;