import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import SectionHeading from "@/components/SectionHeading";

const GithubContributions = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sync = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contribution-graph"
      className="py-6 sm:py-8"
      aria-labelledby="contribution-graph-heading"
    >
      <SectionHeading id="contribution-graph">
        <span id="contribution-graph-heading">My GitHub Contributions</span>
      </SectionHeading>

      <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
        A visual summary of my recent GitHub activity.
      </p>

      <div className="w-full overflow-x-auto overscroll-x-contain scrollbar-hide rounded-md border border-border -mx-0">
        <div className="p-3 sm:p-4 flex justify-start sm:justify-center min-w-max">
          <GitHubCalendar
            key={isDark ? "dark" : "light"}
            username="Davda-James"
            colorScheme={isDark ? "dark" : "light"}
            blockSize={11}
            blockMargin={3}
            fontSize={12}
          />
        </div>
      </div>
    </section>
  );
};

export default GithubContributions;
