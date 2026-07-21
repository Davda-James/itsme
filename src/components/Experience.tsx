import { useId, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import { experiences, type WorkExperience } from "@/lib/experience";
import { cn } from "@/lib/utils";

const getInitial = (name: string) => {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  const firstWord = trimmed.split(/\s+/)[0];
  const match = firstWord.match(/[A-Za-z0-9]/);
  return (match ? match[0] : firstWord[0]).toUpperCase();
};

const ExperienceItem = ({ job }: { job: WorkExperience }) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <li className="relative pl-5 sm:pl-6">
      <span
        aria-hidden
        className="absolute left-[3.5px] top-5 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground ring-[3px] ring-background"
      />

      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="group w-full rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className="flex items-center gap-3">
          {job.logo ? (
            <img
              src={job.logo}
              alt=""
              className="size-10 shrink-0 rounded-full object-cover"
              onContextMenu={(e) => e.preventDefault()}
            />
          ) : (
            <div
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground"
            >
              {getInitial(job.company)}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
              <div className="flex min-w-0 items-center gap-1.5">
                <span className="truncate text-base font-semibold leading-none sm:text-lg">
                  {job.company}
                </span>
                <ChevronRight
                  aria-hidden
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                    "opacity-70 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100",
                    open && "rotate-90 opacity-100",
                  )}
                />
              </div>
              <time className="shrink-0 text-xs text-muted-foreground sm:text-sm">
                {job.timeline}
              </time>
            </div>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">
              {job.role}
              <span className="mx-1.5 text-border" aria-hidden>
                ·
              </span>
              {job.location}
            </p>
          </div>
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-1 pl-[3.25rem] pt-2.5">
            <ul className="space-y-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              {job.description.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span
                    className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-muted-foreground/60"
                    aria-hidden
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {job.technologies.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {job.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-2.5 py-0.5 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-4 pb-6 sm:pt-5 sm:pb-8"
      aria-labelledby="experience-heading"
    >
      <SectionHeading id="experience" className="mb-3 sm:mb-4">
        <span id="experience-heading">Experience</span>
      </SectionHeading>

      <ol className="relative m-0 list-none space-y-4 p-0 sm:space-y-5">
        <span
          aria-hidden
          className="absolute bottom-1 left-[3.5px] top-5 w-px -translate-x-1/2 bg-border"
        />

        {experiences.map((job) => (
          <ExperienceItem key={`${job.company}-${job.timeline}`} job={job} />
        ))}
      </ol>
    </section>
  );
};

export default Experience;
