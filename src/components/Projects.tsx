import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-6 sm:py-8"
      aria-labelledby="projects-heading"
    >
      <SectionHeading id="projects">
        <span id="projects-heading">Projects</span>
      </SectionHeading>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button asChild variant="outline" size="sm">
          <Link to="/projects">View All</Link>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
