import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-3xl px-6 py-12 flex flex-col">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">All Projects</h1>
            <Link to="/" className="text-sm text-muted-foreground hover:underline">
              Back Home
            </Link>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">A complete list of projects and links.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} project={p} />            
          ))}
        </div>

        <div className="h-16" />
      </div>
    </div>
  );
};

export default ProjectsPage;
