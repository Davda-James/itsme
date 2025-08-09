
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";

const contributions = [
	{
		repo: "OWASP/Nettacker",
		title: "fix: issue of select all profiles button",
		url: "https://github.com/OWASP/Nettacker/pull/1117",
		status: "merged",
		date: "August 9, 2025",
		description: "Select all profiles was selecting every scan methods instead of all profiles",
	},
    {
        repo: "msoedov/agentic-security",
        title: "fix: dockerfile error of setuptools and wheel",
        url: "https://github.com/msoedov/agentic_security/pull/215",
        status: "merged",
        date: "April 9, 2025",
        description: " Installation of the setuptools and wheel command were missing and they are required for fire"
    },
    {
        repo: "KamandPrompt",
        title: "feat: added the k_closest elements problem and also added the complexity analysis of every solution",
        url: "https://github.com/KamandPrompt/HackQuest/pull/11",
        status: "merged",
        date: "",
        description: "Added missing TypeScript types for API hooks.",
    },
	{
		repo: "nosana",
		title: "feat: added the templates for multiple models ",
		url: "https://github.com/nosana-ci/pipeline-templates/pull/54",
		status: "open",
		date: "April 2, 2025",
		description: "Added the templates for nosana ci, to make deployment of models (LLM, VLM etc) easy on GPUs",
	},
	{
		repo: "heurist-ai",
		title: "feat: created an automated gmail agent using heurist frameworkCreated an automated gmail agent using heurist framework",
		url: "https://github.com/heurist-network/heurist-agent-framework/pull/72",
		status: "open",
		date: "March 31, 2025",
		description: "Resolved navigation color bug in dark mode.",
	}
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
					{featured.map((pr, idx) => (
						<div
							key={idx}
							tabIndex={0}
							className="group rounded-2xl bg-card/30 backdrop-blur-glass border border-white/10 shadow-elegant p-6 flex flex-col gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 hover:scale-[1.025] hover:shadow-glow hover:border-primary/30 hover:bg-card/50 cursor-pointer"
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
					))}
				</div>
				<div className="flex justify-center">
					<Button
						className="bg-gradient-primary hover:shadow-glow px-8 py-2 text-lg font-semibold"
						onClick={() => setShowModal(true)}
					>
						View All
					</Button>
				</div>
			</div>
			{/* Modal for all PRs */}
			{showModal && (
				<div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
					<div className="absolute inset-0" onClick={() => setShowModal(false)} />
					<div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide bg-card/30 backdrop-blur-glass border border-white/10 rounded-2xl shadow-elegant p-8 z-10 animate-fade-in-up">
						{/* Violet circular accent in modal */}
						<div
							aria-hidden
							className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#a259ff33] via-[#6a4cff22] to-transparent blur-2xl opacity-50 z-0"
						/>
						<div className="flex items-center justify-between mb-6 relative z-10">
							<h3 className="text-2xl md:text-3xl font-bold font-inter bg-gradient-primary bg-clip-text text-transparent text-center w-full">
								All Open Source PRs
							</h3>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setShowModal(false)}
								className="hover:bg-primary/10 absolute right-0 top-0"
							>
								<X className="h-5 w-5" />
							</Button>
						</div>
						<div className="space-y-4 relative z-10">
							{contributions.map((pr, idx) => (
								<div
									key={idx}
									className="rounded-xl bg-card/40 border border-white/10 p-4 flex flex-col gap-1 transition-all duration-200 hover:scale-[1.015] hover:shadow-glow hover:border-primary/30 hover:bg-card/60"
								>
									<div className="flex items-center gap-2 mb-1">
										<span className="font-semibold text-base flex-1 group-hover:text-primary transition-colors duration-200">
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
										className="mt-1 text-primary hover:underline flex items-center gap-1"
									>
										View PR <ExternalLink className="h-4 w-4" />
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
