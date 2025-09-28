import React from "react";

const achievements = [
	{
		title: "Move Spheron Tour",
		description: "Won 1st place and 500 USD, developed a decentralized supply chain management system"
	},
  {
    title: "HCLTech Hackathon",
    description: "Won 2nd place in CrowdFlow track; built a deep-learning based app for real-time crowd analysis and alerts; tl;dr: fine-tuned YOLOv11-nano, FastAPI backend, and Flutter frontend"
  }
];

const Achievements = () => (
	<section id="achievements" className="py-8 mb-6">
		<div className="flex flex-col items-start">
			<h2 className="text-2xl font-bold mb-6 transition-colors cursor-pointer hover:text-primary/70" id="achievements">
				<a href="#achievements" className="hover:text-primary/70 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }); }}>
					Achievements
				</a>
			</h2>
			<div className="flex flex-col gap-4 w-full max-w-2xl pl-2">
				{achievements.map((item, idx) => (
					<div
						key={idx}
						className="relative group transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1"
					>
						<div className="relative z-10 p-2">
							<div className="font-semibold text-lg mb-1 text-foreground">
								{item.title}
							</div>
							<div className="text-muted-foreground text-base">
								{item.description}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Achievements;
