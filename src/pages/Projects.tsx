import { useEffect } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import BottomBar from "@/components/BottomBar";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto w-full max-w-[800px] px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-[calc(5.5rem+env(safe-area-inset-bottom))]">
        <header className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-bold">All Projects</h1>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Back Home
            </Link>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            A complete list of projects and links.
          </p>
        </header>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>

      <BottomBar />
    </div>
  );
};

export default ProjectsPage;
