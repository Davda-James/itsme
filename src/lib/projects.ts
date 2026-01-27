import projectImg1 from "@/assets/projects/puzzlerush.jpg";
import projectImg2 from "@/assets/projects/pikachu.jpg";
import projectImg3 from "@/assets/projects/baxus.jpg";
import projectImg4 from "@/assets/projects/quest_genie.jpg";    
import projectImg5 from "@/assets/projects/freelancehub.png";
import projectImg6 from "@/assets/projects/garud.jpg";

export type Project = {
  title: string;
  image?: string;
  date: string;
  description: string;
  tags: string[];
  website?: string;
  source?: string;
  video?: string;
  highlight?: string;
};

export const projects: Project[] = [
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
        title: "Pikachoo",
        image: projectImg2,
        date: "May 2025",
        description: "Mobile AI flutter app that understands the flow of people in traffic, tracks their complete trajectory and detects the conditions of stampede and sent real time alerts (gmail). \
            Built in HCLTech Hackathon organized as part of CS671 Deep Learning course. Fine Tuned the YoLov8 and YoLov11 model for dense traffic detection.",
        tags: ["Flutter", "FastAPI", "Deep Learning"],
        source: "https://github.com/Davda-James/pikachu",
        highlight: "2nd prize"
    },
    {
        title: "Whiskey Goggles",
        image: projectImg3,
        date: "April 2025",
        description: "Leverages advanced computer vision to identify and rank the top k matching bottles from a curated database. \
            Upon providing a bottle image, the system retrieves matching entries along with rich metadata, enabling fast and accurate identification for inventory, analytics.",
        tags: ["Gradio","Python", "FastAPI", "IndexedDB", "HuggingFace", "Pandas"],
        source: "https://github.com/Davda-James/whiskey-goggles",
        video: "https://youtu.be/fy34lF9Ts1M?si=Z9sdma6muUobp7BK",
        highlight: "Dev Telegram Access"
    },
    {
        title: "Quest Genie",
        image: projectImg4,
        date: "April 2025",
        description: "An AI-powered research assistant that fetches the top papers from the web based on your query, generates concise summaries for each, and lets you interact with a chatbot to ask questions. \
            Queries are cached for faster retrieval, making research faster and more efficient.",
        tags: ["Python", "React", "FastAPI", "MongoDB"],
        source: "https://github.com/Davda-James/CryptoCoders",
        video: "https://youtu.be/fy34lF9Ts1M?si=19khf-pUGPRoR4_y",
    },
    {
        title: "FreelanceHub",
        image: projectImg5,
        date: "July 2025",
        description: "A decentralized freelance platform built on ethereum chain that enables clients and freelancers to seamlessly connect, post and apply for jobs, and manage projects with on-chain transparency. Leveraging wallet-based authentication and smart contracts, it ensures trustless interactions, ownership, and verifiable project delivery in a Web3-native environment.",
        tags: [ "Solidity", "React", "IPFS", "ether.js"],
        source: "https://github.com/Davda-James/freelancing-marketplace",
        video: "https://youtu.be/HJXNc-oj8VY?si=ezo4LLl2PjP7gRMv",
    },
    {
        title: "AgentBOB",
        image: projectImg3,
        date: "April 2025",
        description: "An whiskey recommendation system built for a SuperTeam Earn (BAXUS) bounty, designed to suggest the best whiskey options based on user's past purchase history, budget, and other influencing factors. Exposes a REST API endpoint to serve whiskey recommendations, visit by clicking on website and check github how to access recommendation endpoint.",
        tags: ["Python", "Hugging Face", "FastAPI"],
        source: "https://github.com/Davda-James/Agent_BOB",
        website: "https://baxus-7z5a.onrender.com/",
        highlight: "Dev Telegram Access"        
    },
    {
        title: "Garud",
        image: projectImg6,
        date: "November 2024",
        description: "A mobile application for IIT Mandi that enables students and staff to track campus buses in real time. The app displays live bus locations, current speed, and estimated arrival time at the destination, while also delivering real-time notifications directly from drivers for timely updates and alerts.",
        tags: ["Flutter", "Google Maps API", "Firebase", "Dart"],
        source: "https://github.com/Davda-James/dp",
    },
];