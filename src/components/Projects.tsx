import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-8 mb-6">
      <div ref={ref} className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"} transition-all duration-700`}>
          {projects.slice(0, 4).map((p, idx) => (
            <ProjectCard key={idx} project={p} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Button asChild variant="outline" size="sm">
            <Link to="/projects">View All</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
