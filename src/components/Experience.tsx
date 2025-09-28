import { Badge } from "@/components/ui/badge";

const experiences = [
	{
		company: "Hacktoberfest2024",
		role: "Remote · October 2024 (1 Month)",
		description:
			"Open Source Contributions: Added an AI Bot Script using Google Gemini API, built a Weather Notifier GUI app in Python, and translated/documented Travelling Salesman Problem (C) for global accessibility.",
		technologies: ["Python", "Gemini", "Tkinter", "OpenWeatherMap API"],
		url: "https://www.holopin.io/@neuron#",
	},
	{
		company: "GirlScript Summer of Code (GSSoC)",
		role: "Remote · June 2024 - July 2024",
		description:
			"First open source contribution: Standardized dependency versions, implemented Frequency vs Energy plot for real-time audio using Fourier Coefficients, and integrated it into the existing GUI",
		technologies: [
			"Python",
			"Mathematical Modelling",
			"Fourier Transform",
			"Data Visualization",
		],
		url: "https://gssoc.girlscript.tech/",
	},
];

const Experience = () => {
	return (
		<section id="experience" className="py-8 mb-6">
			<h2 className="text-2xl font-bold mb-6 transition-colors cursor-pointer hover:text-primary/70" id="experience">
				<a href="#experience" className="hover:text-primary/70 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>
					Experiences
				</a>
			</h2>
			<div className="flex flex-col gap-8">
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
							{exp.company === "GirlScript Summer of Code (GSSoC)" ? (
								<>
									First open source contribution: Standardized dependency versions, implemented Frequency vs Energy plot for real-time audio using Fourier Coefficients, and integrated it into the existing GUI
									<a
										href="https://github.com/Soumya-Kushwaha/SoundScape/pull/94"
										target="_blank"
										rel="noopener noreferrer"
										onClick={e => e.stopPropagation()}
										className="text-primary underline ml-1"
									>
										#PR94
									</a>
									<a
										href="https://github.com/python-geeks/Automation-scripts/pull/991"
										target="_blank"
										rel="noopener noreferrer"
										onClick={e => e.stopPropagation()}
										className="text-primary underline ml-1"
									>
										#PR991
									</a>
									<a
										href="https://github.com/python-geeks/Automation-scripts/pull/963"
										target="_blank"
										rel="noopener noreferrer"
										onClick={e => e.stopPropagation()}
										className="text-primary underline ml-1"
									>
										#PR963
									</a>
								</>
							) : exp.description}
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