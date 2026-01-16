import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GithubContributions = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (typeof document === "undefined") return;

        const compute = () => {
            const htmlHasDark = document.documentElement.classList.contains("dark");
            setIsDark(htmlHasDark);
        };

        compute();

        const observer = new MutationObserver(compute);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => {
            observer.disconnect();
        };
    }, []);
    return(
        <section id="contribution-graph" className="py-8 mb-6">
            <div className="flex flex-col items-start w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-6 transition-colors cursor-pointer hover:text-primary/70" id="contribution-graph">
                    <a href="#contribution-graph" className="hover:text-primary/70 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('contribution-graph')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        My GitHub Contributions
                    </a>
                </h2>

                <p className="text-muted-foreground mb-6 text-base">A visual summary of my recent GitHub activity.</p>

                <div className="w-full">
                    <div className="w-full border border-zinc-200 dark:border-zinc-700 rounded-md p-4 flex justify-center">
                        <GitHubCalendar
                            key={isDark ? "dark" : "light"}
                            username="Davda-James"
                            colorScheme={isDark ? "dark" : "light"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GithubContributions;