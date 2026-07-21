import type { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Smartphone } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

type Props = {
  project: Project;
};

const linkClass =
  "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border text-xs sm:text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm flex flex-col h-full">
      <div className="relative aspect-[16/9] w-full bg-muted">
        <img
          src={project.image as string}
          alt={`${project.title} preview`}
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
          decoding="async"
        />

        {project.highlight && (
          <div className="absolute left-2.5 top-2.5 inline-flex max-w-[calc(100%-1.25rem)] items-center gap-2 rounded-md px-2.5 py-1 bg-background/85 border border-border text-xs sm:text-sm text-foreground shadow-sm backdrop-blur-sm">
            <span
              className="size-1.5 shrink-0 rounded-full bg-foreground"
              aria-hidden
            />
            <span className="truncate">{project.highlight}</span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">{project.date}</p>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-3 mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="px-2 py-0.5 text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {(project.website ||
          project.app ||
          project.source ||
          project.video) && (
          <div className="mt-auto flex flex-wrap items-center gap-2">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <ExternalLink className="size-3.5" aria-hidden />
                Website
              </a>
            )}

            {project.app && (
              <a
                href={project.app}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-400`}
              >
                <Smartphone className="size-3.5" aria-hidden />
                App
              </a>
            )}

            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <SiGithub className="size-3.5" aria-hidden />
                Source
              </a>
            )}

            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch demo of ${project.title}`}
                className={`${linkClass} border-red-200 text-red-600 dark:border-red-700 dark:text-red-400`}
              >
                <span className="inline-flex size-4 items-center justify-center rounded-sm bg-red-600 text-white">
                  <Play className="size-2.5" aria-hidden />
                </span>
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
