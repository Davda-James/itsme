
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contributions = [
	{
		repo: "Avaiga/taipy",
		title: "improvement: pressing enter selects all filtered/remaining contents in selector",
		url: "https://github.com/Avaiga/taipy/pull/2710",
		status: "merged",
		date: "Aug 22, 2025",
		description: "Pressing enter selects all the filtered/remaining elements in selector automatically"
	},
	{
		repo: "Soumya-Kushwaha/SoundScape",	
        title: "feat: added feature of Frequency Vs Energy Plot of real time audio",
        url: "https://github.com/Soumya-Kushwaha/SoundScape/pull/94",
        status: "merged",   
        date: "July 13, 2025",
        description: "Added feature of Frequency Vs Energy Plot of real time audio using Fourier Coefficients method implemented in existing GUI"
        
    },
	{
		repo: "Apache/Beam",
        title: "feat: added support for duration/timeout in test_pipeline",
        url: "https://github.com/apache/beam/pull/35831",
        status: "merged",   
        date: "Aug 12, 2025",
        description: "Added support for duration/timeout in test_pipeline so that test does not wait infinitely, and after certain time raise error"
	},	
	{
		repo: "OWASP/Nettacker",
		title: "fix: issue of select all profiles button",
		url: "https://github.com/OWASP/Nettacker/pull/1117",
		status: "merged",
		date: "August 9, 2025",
		description: "Select all profiles was selecting every scan methods instead of all profiles",
	},
    // {
    //     repo: "msoedov/agentic-security",
    //     title: "fix: dockerfile error of setuptools and wheel",
    //     url: "https://github.com/msoedov/agentic_security/pull/215",
    //     status: "merged",
    //     date: "April 9, 2025",
    //     description: " Installation of the setuptools and wheel command were missing and they are required for fire"
    // },
    // {
    //     repo: "python-geeks/Automation-scripts",
    //     title: "feat: added the AI Bot Script (Gemini) ",
    //     url: "https://github.com/python-geeks/Automation-scripts/pull/991",
    //     status: "merged",
    //     date: "October 13, 2025",
    //     description: "Python script designed to interact with users and generate responses using the Google Generative AI API. This script allows users to input queries or prompts and receive contextual and coherent responses from the AI mode"
    // },
];

const statusColor = {
	merged: "bg-green-600/20 text-green-400 border-green-400/30",
	open: "bg-blue-600/20 text-blue-400 border-blue-400/30",
	closed: "bg-red-600/20 text-red-400 border-red-400/30",
};

export default function OpenSourceContributions() {
	const [showModal, setShowModal] = useState(false);
	const featured = contributions.slice(0, 4);

	return (
	<section id="open-source" className="relative py-16 px-4 md:px-8 lg:px-24 overflow-hidden scroll-mt-28">
			{/* Violet circular gradient accent (moved to right for consistency) */}
			<div
				aria-hidden
				className="pointer-events-none absolute -top-32 right-0 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#a259ff33] via-[#6a4cff22] to-transparent blur-3xl opacity-60 z-0"
			/>
			<div className="relative max-w-4xl mx-auto z-10">
				<h2 className="text-center text-4xl md:text-5xl font-bold mb-2 font-inter bg-gradient-primary bg-clip-text text-transparent">
					Open Source Contributions
				</h2>
				<p className="text-center text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
					Pull Requests and code contributions to the open source community.
				</p>
				{/* Featured PRs Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
					{featured.map((pr, idx) => {
						const { ref, isVisible } = useScrollAnimation({ rootMargin: '0px 0px -80px 0px' });
						return (
							<div
								key={idx}
								ref={ref}
								tabIndex={0}
								className={
									`group rounded-2xl bg-card/30 backdrop-blur-glass border border-white/10 shadow-elegant p-6 flex flex-col gap-2 will-change-transform focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer ` +
									(isVisible ? 'opacity-100 translate-y-0 transition-opacity transition-transform duration-700' : 'opacity-0 translate-y-8 transition-opacity transition-transform duration-700') +
									' hover:scale-[1.025] hover:shadow-glow hover:border-primary/30 hover:bg-card/50 transition-[box-shadow,border,background,transform] duration-170'
								}
								style={{ transitionDelay: `${idx * 80}ms` }}
							>
								<div className="flex items-center gap-2 mb-1">
									<span className="font-semibold text-lg flex-1 group-hover:text-primary transition-colors duration-200">
										{pr.title}
									</span>
									<Badge className={`border ${statusColor[pr.status as keyof typeof statusColor]}`}>{pr.status}</Badge>
								</div>
								<div className="text-xs text-muted-foreground mb-1">{pr.repo} • {pr.date}</div>
								<div className="text-sm text-muted-foreground flex-1">{pr.description}</div>
								<a
									href={pr.url}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-2 text-primary hover:underline flex items-center gap-1"
								>
									View PR <ExternalLink className="h-4 w-4" />
								</a>
							</div>
						);
					})}
				</div>
						<div className="flex justify-center">
							<a
								href="https://github.com/search?q=is%3Apr+author%3ADavda-James+is%3Amerged&type=PullRequests"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="bg-gradient-primary hover:shadow-glow px-8 py-2 text-lg font-semibold">
									View All
								</Button>
							</a>
						</div>
					</div>
		</section>
	);
}
