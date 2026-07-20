import SectionHeading from "@/components/SectionHeading";

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
] as const;

const Achievements = () => (
  <section
    id="achievements"
    className="py-6 sm:py-8"
    aria-labelledby="achievements-heading"
  >
    <SectionHeading id="achievements">
      <span id="achievements-heading">Achievements</span>
    </SectionHeading>

    <ul className="flex flex-col gap-5 sm:gap-6 list-none p-0 m-0">
      {achievements.map((item) => {
        const content = (
          <>
            <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </>
        );

        return (
          <li key={item.title}>
            {"link" in item && item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {content}
              </a>
            ) : (
              <div>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  </section>
);

export default Achievements;
