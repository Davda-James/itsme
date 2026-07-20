import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const contributions = [
  {
    repo: "Tracer-Cloud/opensre",
    title: "feat: add the health check fastapi endpoint for hosted deployments",
    url: "https://github.com/Tracer-Cloud/opensre/pull/340",
    date: "April 5, 2026",
  },
  {
    repo: "cocoindex-io/cocoindex",
    title: "feat: Batched functions support additional arguments",
    url: "https://github.com/cocoindex-io/cocoindex/pull/1766",
    date: "March 21, 2026",
  },
  {
    repo: "langchain-ai/langchain",
    title:
      "feat(core): add 'approximate' alias in place of count_tokens_approximately",
    url: "https://github.com/langchain-ai/langchain/pull/33045",
    date: "Dec 20, 2025",
  },
  {
    repo: "cocoindex-io/cocoindex",
    title:
      "feat: support binding classes on Pydantic Models to CocoIndex Struct",
    url: "https://github.com/cocoindex-io/cocoindex/pull/1072",
    date: "Oct 1, 2025",
  },
  {
    repo: "cocoindex-io/cocoindex",
    title:
      "feat: collect additional counter for number of rows that are being processed for stats",
    url: "https://github.com/cocoindex-io/cocoindex/pull/1105",
    date: "Oct 4, 2025",
  },
  {
    repo: "cocoindex-io/cocoindex",
    title:
      "refactor: updated existing tests for split_recursively.rs to be based on public",
    url: "https://github.com/cocoindex-io/cocoindex/pull/1073",
    date: "Oct 1, 2025",
  },
  {
    repo: "cocoindex-io/cocoindex",
    title: "refactor: refactored functions module in python sdk to subpackage",
    url: "https://github.com/cocoindex-io/cocoindex/pull/1082",
    date: "Oct 2, 2025",
  },
  {
    repo: "cocoindex-io/cocoindex",
    title: "refactor: sources moved to sources subpackage in python sdk",
    url: "https://github.com/cocoindex-io/cocoindex/pull/1081",
    date: "Oct 2, 2025",
  },
  {
    repo: "gradio-app/gradio",
    title: "feat: gr.load_chat supports optional textbox= argument",
    url: "https://github.com/gradio-app/gradio/pull/11998",
    date: "Oct 1, 2025",
  },
  {
    repo: "SolixDB/package",
    title: "feat(storage): add redis adapter for real-time data streaming",
    url: "https://github.com/SolixDB/pulls/7",
    date: "Nov 12, 2025",
  },
  {
    repo: "Avaiga/taipy",
    title:
      "improvement: pressing enter selects all filtered/remaining contents in selector",
    url: "https://github.com/Avaiga/taipy/pull/2710",
    date: "Aug 22, 2025",
  },
  {
    repo: "Soumya-Kushwaha/SoundScape",
    title: "feat: added feature of Frequency Vs Energy Plot of real time audio",
    url: "https://github.com/Soumya-Kushwaha/SoundScape/pull/94",
    date: "July 13, 2025",
  },
  {
    repo: "OWASP/Nettacker",
    title: "fix: issue of select all profiles button",
    url: "https://github.com/OWASP/Nettacker/pull/1117",
    date: "August 9, 2025",
  },
  {
    repo: "Apache/Beam",
    title: "feat: added support for duration/timeout in test_pipeline",
    url: "https://github.com/apache/beam/pull/35831",
    date: "Aug 12, 2025",
  },
] as const;

const OpenSourceContributions = () => {
  return (
    <section
      id="open-source"
      className="py-6 sm:py-8"
      aria-labelledby="open-source-heading"
    >
      <SectionHeading id="open-source">
        <span id="open-source-heading">Open Source Contributions</span>
      </SectionHeading>

      <ul className="flex flex-col gap-2.5 sm:gap-3 list-none p-0 m-0">
        {contributions.map((pr) => (
          <li key={pr.url}>
            <a
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-md border border-border px-3 py-2.5 sm:px-4 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="block font-semibold text-sm sm:text-base mb-1 leading-snug group-hover:text-primary transition-colors">
                {pr.title}
              </span>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-0.5 text-xs text-muted-foreground">
                <span className="truncate min-w-0">{pr.repo}</span>
                <span className="shrink-0">{pr.date}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center">
        <Button asChild variant="outline" size="sm">
          <a
            href="https://github.com/search?q=is%3Apr+author%3ADavda-James+is%3Amerged&type=PullRequests"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All
          </a>
        </Button>
      </div>
    </section>
  );
};

export default OpenSourceContributions;
