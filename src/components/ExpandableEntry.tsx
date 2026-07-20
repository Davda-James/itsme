import { useId, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ExpandableLink = {
  alias: string;
  url: string;
  repo: string;
};

type ExpandableEntryProps = {
  title: string;
  subtitle: string;
  meta: string;
  description: string;
  technologies: string[];
  logo?: string;
  links?: ExpandableLink[];
  defaultOpen?: boolean;
};

const getInitial = (name: string) => {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  const firstWord = trimmed.split(/\s+/)[0];
  const match = firstWord.match(/[A-Za-z0-9]/);
  return (match ? match[0] : firstWord[0]).toUpperCase();
};

const ExpandableEntry = ({
  title,
  subtitle,
  meta,
  description,
  technologies,
  logo,
  links,
  defaultOpen = false,
}: ExpandableEntryProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const buttonId = useId();

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="rounded-lg">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        className="group w-full text-left rounded-lg px-1 py-3 sm:px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className="flex items-start gap-3">
          {logo ? (
            <img
              src={logo}
              alt=""
              className="size-9 sm:size-10 shrink-0 rounded-full object-cover"
              onContextMenu={(e) => e.preventDefault()}
            />
          ) : (
            <div
              aria-hidden
              className="size-9 sm:size-10 shrink-0 rounded-full flex items-center justify-center bg-muted text-muted-foreground font-semibold text-sm"
            >
              {getInitial(title)}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
              <div className="flex min-w-0 items-center gap-1.5">
                <span className="font-semibold text-base sm:text-lg leading-snug truncate">
                  {title}
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
              <span className="text-muted-foreground text-xs sm:text-sm sm:text-right sm:shrink-0 sm:pt-0.5">
                {meta}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
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
          <div className="px-1 pb-3 sm:px-2 sm:pl-[3.25rem]">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              {description}
              {links?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${link.repo} — view PR`}
                  onClick={(e) => e.stopPropagation()}
                  className="ml-1.5 text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  {link.alias}
                </a>
              ))}
            </p>

            {technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                {technologies.map((tech) => (
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
    </div>
  );
};

export default ExpandableEntry;
