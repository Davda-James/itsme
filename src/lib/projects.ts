import puzzlerush from "@/assets/projects/puzzlerush.jpg";
import pikachu from "@/assets/projects/pikachu.jpg";
import baxus from "@/assets/projects/baxus.jpg";
import quest_genie from "@/assets/projects/quest_genie.jpg";
import freelancehub from "@/assets/projects/freelancehub.png";
import garud from "@/assets/projects/garud.jpg";
import gitdash from "@/assets/projects/GitDash.jpg";
import dhirajayuacademy from "@/assets/projects/dhirajayuacademy.jpeg";

export type Project = {
  title: string;
  image?: string;
  date: string;
  description: string;
  tags: string[];
  website?: string;
  app?: string;
  source?: string;
  video?: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    title: "Dhiraj Ayu Academy",
    image: dhirajayuacademy,
    date: "March 2025",
    description:
      "A Flutter Android app for Dhiraj Ayu Academy that helps Ayurveda students prepare for competitive exams like AIAPGET, GPSC etc., made for professor of Nobel University. You can download the app by visiting the landing page given below (website) or directly from app. Currently there is 72+ downloads on play store.",
    tags: ["Flutter", "Android", "Razorpay", "Node", "Express", "CMS"],
    website: "https://dhirajayuacademy.xyz",
    app: "https://play.google.com/store/apps/details?id=com.dhirajayu.academy",
  },
  {
    title: "GitDash",
    image: gitdash,
    date: "Match 2025",
    description:
      "A Rust CLI tool to stalk GitHub profiles without ever leaving your terminal. Its for everyone especially terminal addicts who hate opening the browser like me. Uses github api to fetch data and renders it in a slick TUI. Used crossterm, ratatui, tokio, serde, clap, reqwest, serde, serde_json, futures to craft this. Already published to crates.io. Install using : cargo install gitdash and then just gd <username>.",
    tags: ["Rust", "CLI", "Github"],
    website: "https://crates.io/crates/gitdash",
    source: "https://github.com/Davda-James/gitdash",
  },
  {
    title: "PuzzleRush",
    image: puzzlerush,
    date: "Oct 2025",
    description:
      "Built as a final project in School of Solana Season 8. Chess platform where users solve daily chess puzzle and get NFT. Every day github actions fetches new puzzles from Lichess and push in on chain (program). Upon successfull completion of puzzle a cert is issued and at regular interval github action mints this to the user's associated token account.",
    tags: ["Rust", "Anchor", "React", "Metaplex"],
    website: "https://chess-trivia.0xjames.me/",
    source: "https://github.com/Davda-James/chess-trivia",
  },
  {
    title: "Pikachoo",
    image: pikachu,
    date: "May 2025",
    description:
      "Mobile AI flutter app that understands the flow of people in traffic, tracks their complete trajectory and detects the conditions of stampede and sent real time alerts (gmail). \
            Built in HCLTech Hackathon organized as part of CS671 Deep Learning course. Fine Tuned the YoLov8 and YoLov11 model for dense traffic detection.",
    tags: ["Flutter", "FastAPI", "Deep Learning"],
    source: "https://github.com/Davda-James/pikachu",
    highlight: "2nd prize",
  },
  {
    title: "Whiskey Goggles",
    image: baxus,
    date: "April 2025",
    description:
      "Leverages advanced computer vision to identify and rank the top k matching bottles from a curated database. \
            Upon providing a bottle image, the system retrieves matching entries along with rich metadata, enabling fast and accurate identification for inventory, analytics.",
    tags: ["Gradio", "Python", "FastAPI", "IndexedDB", "HuggingFace", "Pandas"],
    source: "https://github.com/Davda-James/whiskey-goggles",
    video: "https://youtu.be/fy34lF9Ts1M?si=Z9sdma6muUobp7BK",
    highlight: "Dev Telegram Access",
  },
  {
    title: "Quest Genie",
    image: quest_genie,
    date: "April 2025",
    description:
      "An AI-powered research assistant that fetches the top papers from the web based on your query, generates concise summaries for each, and lets you interact with a chatbot to ask questions. \
            Queries are cached for faster retrieval, making research faster and more efficient.",
    tags: ["Python", "React", "FastAPI", "MongoDB"],
    source: "https://github.com/Davda-James/CryptoCoders",
    video: "https://youtu.be/fy34lF9Ts1M?si=19khf-pUGPRoR4_y",
  },
  {
    title: "FreelanceHub",
    image: freelancehub,
    date: "July 2025",
    description:
      "A decentralized freelance platform built on ethereum chain that enables clients and freelancers to seamlessly connect, post and apply for jobs, and manage projects with on-chain transparency. Leveraging wallet-based authentication and smart contracts, it ensures trustless interactions, ownership, and verifiable project delivery in a Web3-native environment.",
    tags: ["Solidity", "React", "IPFS", "ether.js"],
    source: "https://github.com/Davda-James/freelancing-marketplace",
    video: "https://youtu.be/HJXNc-oj8VY?si=ezo4LLl2PjP7gRMv",
  },
  {
    title: "AgentBOB",
    image: baxus,
    date: "April 2025",
    description:
      "An whiskey recommendation system built for a SuperTeam Earn (BAXUS) bounty, designed to suggest the best whiskey options based on user's past purchase history, budget, and other influencing factors. Exposes a REST API endpoint to serve whiskey recommendations, visit by clicking on website and check github how to access recommendation endpoint.",
    tags: ["Python", "Hugging Face", "FastAPI"],
    source: "https://github.com/Davda-James/Agent_BOB",
    website: "https://baxus-7z5a.onrender.com/",
    highlight: "Dev Telegram Access",
  },
  {
    title: "Garud",
    image: garud,
    date: "November 2024",
    description:
      "A mobile application for IIT Mandi that enables students and staff to track campus buses in real time. The app displays live bus locations, current speed, and estimated arrival time at the destination, while also delivering real-time notifications directly from drivers for timely updates and alerts.",
    tags: ["Flutter", "Google Maps API", "Firebase", "Dart"],
    source: "https://github.com/Davda-James/dp",
  },
];
