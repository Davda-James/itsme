import React from "react";
import type { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <article className="rounded-2xl overflow-hidden border border-zinc-800/40 bg-card shadow-md flex flex-col h-full">
      <div className="relative h-40 md:h-44 w-full bg-zinc-100 dark:bg-zinc-900">
        <img
          src={project.image as string}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover"
        />

        {project.highlight && (
          <div className="absolute left-3 top-3 inline-flex items-center gap-3 rounded-md px-3 py-1 bg-white/80 border border-zinc-200 text-sm text-zinc-800 shadow-sm dark:bg-zinc-900/60 dark:border-zinc-700 dark:text-zinc-200">
            <span className="w-2 h-2 rounded-full bg-zinc-800 dark:bg-zinc-200" />
            <span className="truncate max-w-[160px] text-sm">
              {project.highlight}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold truncate">
              {project.title}
            </h3>
            <div className="text-sm text-muted-foreground mt-1">
              {project.date}
            </div>
          </div>
        </div>

        <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-3 sm:mt-4 mb-4 sm:mb-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="outline" className="px-2 py-1 text-xs">
              {t}
            </Badge>
          ))}
        </div>

        {(project.website || project.source || project.video) && (
          <div className="mt-auto flex items-center flex-wrap gap-2 sm:gap-3">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md bg-card/40 border border-zinc-200 dark:border-zinc-700 text-xs sm:text-sm transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Website</span>
              </a>
            )}

            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md bg-card/20 border border-zinc-200 dark:border-zinc-700 text-xs sm:text-sm transition"
              >
                <SiGithub className="w-4 h-4" />
                <span>Source</span>
              </a>
            )}

            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch demo of ${project.title}`}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md border border-red-200 text-red-600 hover:bg-red-50 dark:border-red-700 dark:bg-red-900/10 transition"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-sm bg-red-600 text-white">
                  <Play className="w-3 h-3" />
                </span>
                <span className="text-xs sm:text-sm font-medium">Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
