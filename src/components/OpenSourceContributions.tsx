import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contributions = [
	{		
		repo: "cocoindex-io/cocoindex",
		title: "feat: support binding classes on Pydantic Models to CocoIndex Struct",
		url: "https://github.com/cocoindex-io/cocoindex/pull/1072",
		date: "Oct 1, 2025",
		timestamp: 1764642480000
	},
	{
		repo: "cocoindex-io/cocoindex",
		title: "feat: collect additional counter for number of rows that are being processed for stats",
		url: "https://github.com/cocoindex-io/cocoindex/pull/1105",
		date: "Oct 4, 2025",
	},
	{
		repo: "cocoindex-io/cocoindex",
		title: "feat: split convert.py into 2 modules engine_object and engine_value along with splitting of tests",
		url: "https://github.com/cocoindex-io/cocoindex/pull/1120",
		date: "Oct 4, 2025",
	},
	{
		repo: "cocoindex-io/cocoindex",
		title: "refactor: updated existing tests for split_recursively.rs to be based on public",
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
		repo: "Avaiga/taipy",
		title: "improvement: pressing enter selects all filtered/remaining contents in selector",
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
    {
        repo: "python-geeks/Automation-scripts",
        title: "feat: added the AI Bot Script (Gemini) ",
        url: "https://github.com/python-geeks/Automation-scripts/pull/991",
        date: "October 13, 2025",
    },
];

export default function OpenSourceContributions() {
	const { ref, isVisible } = useScrollAnimation();

	return (
		<section id="open-source" className="py-4 mb-4">
			<div className="flex flex-col items-start w-full max-w-2xl">
				<h2 className="text-2xl font-bold mb-6 transition-colors cursor-pointer hover:text-primary/70" id="open-source">
					<a href="#open-source" className="hover:text-primary/70 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('open-source')?.scrollIntoView({ behavior: 'smooth' }); }}>
						Open Source Contributions
					</a>
				</h2>
				<p className="text-muted-foreground mb-6 text-base">Code contributions to the open source community.</p>
				<div ref={ref} className={`flex flex-col gap-3 w-full max-w-2xl pl-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
					{contributions.map((pr, idx) => (
						<a
							key={idx}
							href={pr.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group border border-zinc-200 dark:border-zinc-700 rounded-md px-3 py-2 transition-shadow hover:shadow-md"
						>
							<span className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{pr.title}</span>
							<div className="flex justify-between w-full text-xs text-muted-foreground">
								<span>{pr.repo}</span>
								<span>{pr.date}</span>
							</div>
						</a>
					))}
				</div>
				<div className="mt-8">
					<a
						href="https://github.com/search?q=is%3Apr+author%3ADavda-James+is%3Amerged&type=PullRequests"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-6 py-2 rounded-md bg-card/40 border border-zinc-200 dark:border-zinc-700 text-foreground font-medium shadow-sm hover:bg-card/60 hover:shadow-md transition-all duration-300"
					>
						View All
					</a>
				</div>
			</div>	
		</section>
	);
}
