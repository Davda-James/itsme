const achievements = [
  {
    title: "Conflux Expert Agent Bounty",
    description:
      "Won $1,200 Conflux Blockchain Expert Agent bounty by building a RAG powered AI agent that scrapes GitHub repositories and ingests the data into Pinecone vector DB (nvidia/llama-text-embed-v2) via an admin CLI/frontend pipeline, and implements LLM native MCP tool calling using a custom MCP client to interact with the Conflux Blockchain MCP server for retrieving live on chain data, powered by Gemini 2.5 Flash (all llm supported by google-genai).",
    link: "https://github.com/conflux-fans/conflux-bounties/pull/36",
  },
  {
    title: "Move Spheron Tour",
    description:
      "Won 1st place and 500 USD, developed a decentralized supply chain management system",
  },
  {
    title: "HCLTech Hackathon",
    description:
      "Won 2nd place in CrowdFlow track; built a deep-learning based app for real-time crowd analysis and alerts; tl;dr: fine-tuned YOLOv11-nano, FastAPI backend, and Flutter frontend",
  },
];

const Achievements = () => (
  <section id="achievements" className="py-4 mb-4">
    <div className="flex flex-col items-start">
      <h2
        className="text-2xl font-bold mb-6 transition-colors cursor-pointer hover:text-primary/70"
        id="achievements"
      >
        <a
          href="#achievements"
          className="hover:text-primary/70 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("achievements")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Achievements
        </a>
      </h2>
      <div className="flex flex-col gap-4 w-full max-w-3xl pl-2">
        {achievements.map((item, idx) => {
          const cardClass =
            "relative group transition-all duration-300 ease-out hover:-translate-y-1" +
            (item.link ? " cursor-pointer" : "");

          const inner = (
            <div className="relative z-10 p-2">
              <div className="font-semibold text-lg mb-1 text-foreground">
                {item.title}
              </div>
              <div className="text-muted-foreground text-base">
                {item.description}
              </div>
            </div>
          );

          return item.link ? (
            <a
              key={idx}
              href={item.link}
              rel="noopener noreferrer"
              className={cardClass}
            >
              {inner}
            </a>
          ) : (
            <div key={idx} className={cardClass}>
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Achievements;
