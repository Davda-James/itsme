import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import projectImg1 from "@/assets/projects/puzzlerush.jpg";
import projectImg2 from "@/assets/projects/project2.jpg";

const projects = [
  {
    title: "PuzzleRush",
    image: projectImg1,
    date: "Oct 2025",
    description:
      "Built as a final project in School of Solana Season 8. Chess platform where users solve daily chess puzzle and get NFT. Every day github actions fetches new puzzles from Lichess and push in on chain (program). Upon successfull completion of puzzle a cert is issued and at regular interval github action mints this to the user's associated token account.",
    tags: ["Rust", "Anchor", "React", "Metaplex"],
    website: "https://chess-trivia.0xjames.me/",
    source: "https://github.com/Davda-James/chess-trivia",
  },
  {
    title: "Pikachu",
    image: projectImg2,
    date: "May 2025",
    description: "Mobile AI flutter app that understands the flow of people in traffic, tracks their complete trajectory and detects the conditions of stampede and sent real time alerts (gmail). \
      Built in HCLTech Hackathon organized as part of CS671 Deep Learning course. Fine Tuned the YoLov8 and YoLov11 model for dense traffic detection.",
    tags: ["Flutter", "FastAPI", "Deep Learning"],
    source: "https://github.com/Davda-James/pikachu",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-8 mb-6">
      <div ref={ref} className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"} transition-all duration-700`}>
          {projects.map((p, idx) => (
            <article key={idx} className="rounded-2xl overflow-hidden border border-zinc-800/40 bg-card shadow-md flex flex-col h-full">
              <div className="h-40 md:h-44 w-full bg-zinc-100 dark:bg-zinc-900">
                <img src={p.image} alt={`${p.title} preview`} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold truncate">{p.title}</h3>
                    <div className="text-sm text-muted-foreground mt-1">{p.date}</div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <div className="mt-4 mb-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="outline" className="px-2 py-1 text-xs">{t}</Badge>
                  ))}
                </div>

                {(p.website || p.source) && (
                  <div className="mt-auto flex items-center gap-3">
                    {p.website && (
                      <a href={p.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-card/40 border border-zinc-200 dark:border-zinc-700 text-sm transition">
                        <ExternalLink className="w-4 h-4" />
                        <span>Website</span>
                      </a>
                    )}

                    {p.source && (
                      <a href={p.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-card/20 border border-zinc-200 dark:border-zinc-700 text-sm transition">
                        <SiGithub className="w-4 h-4" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
