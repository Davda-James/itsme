import { Badge } from "@/components/ui/badge";
import { Description } from "@radix-ui/react-toast";
import { TextCursor } from "lucide-react";

const experiences = [
	{
		company: "Hacktoberfest 2024 & 2025",
		role: "October 2024 & October 2025",
		description: "Contributions to various projects, Super Contributor 2k25, ",
		technologies: ["Rust","Python", "Gemini", "Tkinter", "OpenWeatherMap API"],
		url: "https://www.holopin.io/@neuron#badges",
		links: [
		{ alias: "#PR1072", url: "https://github.com/cocoindex-io/cocoindex/pull/1072", repo: "cocoindex" },
		{ alias: "#PR1105", url: "https://github.com/cocoindex-io/cocoindex/pull/1105", repo: "cocoindex" },
		{ alias: "#PR1120", url: "https://github.com/cocoindex-io/cocoindex/pull/1120", repo: "cocoindex" },
		{ alias: "#PR1073", url: "https://github.com/cocoindex-io/cocoindex/pull/1073", repo: "cocoindex" },
		{ alias: "#PR1082", url: "https://github.com/cocoindex-io/cocoindex/pull/1082", repo: "cocoindex" },
		{ alias: "#PR1081", url: "https://github.com/cocoindex-io/cocoindex/pull/1081", repo: "cocoindex" },
		{ alias: "#PR11998", url: "https://github.com/gradio-app/gradio/pull/11998", repo: "gradio" },
		{ alias: "#PR12000", url: "https://github.com/gradio-app/gradio/pull/12000", repo: "gradio" },
		{ alias: "#PR991", url: "https://github.com/python-geeks/Automation-scripts/pull/991", repo: "Automation-scripts" },
		{ alias: "#PR963", url: "https://github.com/python-geeks/Automation-scripts/pull/963", repo: "Automation-scripts" }
		]	
	},
	{
		company: "Ackee Blockchain (School of Solana)",
		role: "October 8",
		description: "Learning Rust and solana blockchain",
		technologies: ["Rust","Solana","Blockchain"],
		url: "https://ackee.xyz",
	},
	{
		company: "GirlScript Summer of Code (GSSoC)",
		role: "June 2023 - July 2023",
		description: "First open source contribution: Standardized dependency versions, implemented Frequency vs Energy plot for real-time audio using Fourier Coefficients, and integrated it into the existing GUI",
		technologies: [
			"Python",
			"Mathematical Modelling",
			"Fourier Transform",
			"Data Visualization",
		],
		url: "https://gssoc.girlscript.tech/",
		links: [
			{ alias: "#PR94", url: "https://github.com/Soumya-Kushwaha/SoundScape/pull/94", repo: "SoundScape" }
		]
	}
];

const Experience = () => {
	return (
		<section id="experience" className="py-4 mb-4">
			<h2 className="text-2xl font-bold mb-3 transition-colors cursor-pointer hover:text-primary/70" id="experience">
				<a href="#experience" className="hover:text-primary/70 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>
					Experiences
				</a>
			</h2>
			<div className="flex flex-col gap-4">
				{experiences.map((exp, idx) => (
					<a
						key={idx}
						href={exp.url}
						target="_blank"
						rel="noopener noreferrer"
						className="block rounded-lg transition-colors duration-200 group px-2 py-2"
					>
						<div className="flex items-center mb-1">
							<span className="font-semibold text-lg flex-1 group-hover:text-zinc-500 group-active:text-zinc-400 transition-colors duration-200">{exp.company}</span>
							<span className="text-muted-foreground text-base text-right group-hover:text-zinc-500 group-active:text-zinc-400 transition-colors duration-200">{exp.role}</span>
						</div>
						<p className="text-zinc-700 dark:text-zinc-200 text-sm leading-relaxed max-w-3xl group-hover:text-zinc-500 group-active:text-zinc-400 dark:group-hover:text-zinc-300 dark:group-active:text-zinc-400 transition-colors duration-200">
							{exp.description}
							{exp.links && exp.links.map((link, linkIdx) => (
								<span key={linkIdx} className="relative inline-block ml-1 group/tooltip">
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										onClick={e => e.stopPropagation()}
										className="text-primary underline hover:text-primary/80 transition-colors"
									>
										{link.alias}
									</a>
									{/* Tooltip */}
									<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs rounded-md shadow-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
										<div className="font-medium">{link.repo}</div>
										<div className="text-xs opacity-75">Click to view PR</div>
										{/* Tooltip arrow */}
										<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
									</div>
								</span>
							))}
						</p>
						<div className="flex flex-wrap gap-2 mt-2">
							{exp.technologies.map((tech) => (
								<span
									key={tech}
									className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs text-muted-foreground border border-zinc-200 dark:border-zinc-700 group-hover:text-zinc-500 group-active:text-zinc-400 dark:group-hover:text-zinc-300 dark:group-active:text-zinc-400"
								>
									{tech}
								</span>
							))}
						</div>
					</a>
				))}
			</div>
		</section>
	);
};

export default Experience;