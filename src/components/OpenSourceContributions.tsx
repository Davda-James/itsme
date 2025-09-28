import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contributions = [
	{
		repo: "Avaiga/taipy",
		title: "improvement: pressing enter selects all filtered/remaining contents in selector",
		url: "https://github.com/Avaiga/taipy/pull/2710",
		status: "merged",
		date: "Aug 22, 2025",
	},
	{
		repo: "Soumya-Kushwaha/SoundScape",	
        title: "feat: added feature of Frequency Vs Energy Plot of real time audio",
        url: "https://github.com/Soumya-Kushwaha/SoundScape/pull/94",
        status: "merged",   
        date: "July 13, 2025"
        
    },
	{
		repo: "OWASP/Nettacker",
		title: "fix: issue of select all profiles button",
		url: "https://github.com/OWASP/Nettacker/pull/1117",
		status: "merged",
		date: "August 9, 2025"
	},
	{
		repo: "browser-use/browser-use",
		title: "fixed the bug of only web in gmail_2fa_integration.py",
		url: "https://github.com/browser-use/browser-use/pull/2685",
		status: "merged",
		date: "September 6, 2025"
	},
	{
		repo: "Apache/Beam",
        title: "feat: added support for duration/timeout in test_pipeline",
        url: "https://github.com/apache/beam/pull/35831",
        status: "merged",   
        date: "Aug 12, 2025"
	},	
    {
        repo: "msoedov/agentic-security",
        title: "fix: dockerfile error of setuptools and wheel",
        url: "https://github.com/msoedov/agentic_security/pull/215",
        status: "merged",
        date: "April 9, 2025"
    },
    {
        repo: "python-geeks/Automation-scripts",
        title: "feat: added the AI Bot Script (Gemini) ",
        url: "https://github.com/python-geeks/Automation-scripts/pull/991",
        status: "merged",
        date: "October 13, 2025"
    },
];

export default function OpenSourceContributions() {
	const { ref, isVisible } = useScrollAnimation();

	return (
		<section id="open-source" className="py-8 mb-6">
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
