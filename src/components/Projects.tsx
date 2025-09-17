import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, TrendingUp, Users, Award } from "lucide-react";
import { SiGithub , SiYoutube } from '@icons-pack/react-simple-icons'; 
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1Image from "@/assets/project1.png";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";
import project4Image from "@/assets/project4.jpg";
import project5Image from "@/assets/project5.jpg";
import project6Image from "@/assets/project6.jpg"; 
import project7Image from "@/assets/project7.jpg";
import project8Image from "@/assets/project8.png";

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ rootMargin: '0px 0px -50px 0px' });

  const projects = [
    {
      title: "FreelanceHub",
      description: "A decentralized freelance platform that enables clients and freelancers to seamlessly connect, post and apply for jobs, and manage projects with on-chain transparency. Leveraging wallet-based authentication and smart contracts, it ensures trustless interactions, ownership, and verifiable project delivery in a Web3-native environment.",
      image: project1Image,
      technologies: ["React", "TypeScript", "IPFS", "ethers.js", "Solidity", "Clerk", "Node.js", "Express.js"],
      github: "https://github.com/Davda-James/freelancing-marketplace",
      live: "#",
      featured: true,
      live_link: false,
      // youtube: "https://www.youtube.com/watch?v=your-video-id", 
      date: "July 2025",
      award: "",
      achievements: [
        "Built complete Web3 freelancing marketplace with wallet integration",
        "Implemented smart contracts for trustless payment escrow system",
        "Integrated IPFS for decentralized file storage and project delivery",
        "Created seamless onboarding flow with Clerk authentication"
      ]
    },
    {
      title: "Pikachoo",
      description: "Mobile AI flutter app that understands the flow of people in traffic, tracks their complete trajectory and detects the conditions of stampede in real time. Build in HCLTech Hackathon organized as part of CS671 Deep Learning course.",
      image: project2Image,
      technologies: ["Flutter", "Python", "FastAPI", "Deep Learning", "Computer Vision"],
      github: "https://github.com/Davda-James/pikachu",
      live: "#",
      featured: true,
      live_link: false,
      // youtube: "",
      date: "May 2025",
      award: "3rd Position in CrowdFlow PS",
      achievements: [
        "Fine Tuned the YoLov8 and YoLov11 model for dense traffic detection",
        "Understands the flow of dense traffic real time",
        "Tracks the complete path of a person in traffic",
        "Detects the stampede and real time gmail alerts to authorities"
      ]
    },
    {
      title: "AptoSupply",
      description: "AptoSupply is a decentralized supply chain management platform built on Aptos blockchain.",
      image: project7Image,
      technologies: ["Aptos", "Move", "Smart Contracts" ,"NextJs"],
      github: "https://github.com/Voldemort271/aptos-hackathon",
      live: "#",
      featured: true,
      live_link: false,
      date: "October 2024",
      award: "1st Prize Winner, 500 USD",
      achievements: [
        "Implemented smart contracts for product tracking and verification",
        "Ensured end-to-end traceability of products using blockchain",
        "Enhanced supply chain transparency and reduced fraud"
      ]
    },
    {
      title: "Data Alchemist",
      description: "Build a Next.js application that allows users to upload CSV files specific format (shown in video) and perform various data operations",
      image: project8Image,
      technologies: ["NextJs", "Gemini", "AI", "Parsing"],
      github: "https://github.com/Davda-James/data-alchemist",
      live: "https://data-alchemist-alpha.vercel.app/",
      featured: true,
      live_link: true,
      youtube: "https://youtu.be/6kwyDdlHWG8",
      date: "June 2025",
      award: "Pre-Intern Assignment Digitalyz",
      achievements: [
        "Displays a user-friendly interface for visualizing all csv's",
        "Natural language editing of any row or cell of tables as well as natural language addition of rules, operations and constraints on tables cols or rows",
        "Shows AI suggestions if there is cyclic dependency and resolves if possible",
        "Can Export rules json, imroved csv and much more, see the video for more details",
      ]
      
    },
    {
      title: "QuestGenie",
      description: "Research AI Agent build in FrostHack2025 Hackathon",
      image: project3Image,
      technologies: ["React", "Python", "FastAPI", "MongoDB", "HuggingFace", "arxiv"],
      github: "https://github.com/Davda-James/CryptoCoders",
      live: "#",
      featured: true,
      live_link: false,
      youtube: "https://youtu.be/XMh5Vm8Xtbc",
      date: "April 2025",
      award: "",
      achievements: [
        "Fetches the best k papers from web based on user query",
        "Generates a comprehensive report for each paper summarizing them",
        "Caches the queries for faster retrieval of results",
        "Provides a chat bot to chat on each paper and ask questions"
      ]
    },
    {
      title: "Whiskey Goggles",
      description: "Fetches the top k bottle matches from database along with metadata based on user provided bottle image using computer vision. Built for bounty.",
      image: project4Image,
      technologies: ["Python", "HuggingFace", "Gradio", "Pandas", "Numpy"],
      github: "https://github.com/Davda-James/Whiskey-Goggles",
      live: "#",
      featured: true,
      live_link: false,
      youtube: "https://www.youtube.com/watch?v=fy34lF9Ts1M&t=1s",
      date: "April 2025",
      award: "Got access to dev group",
      achievements: [
        "Converts the image to embeddings using openai/clip-vit-base-patch32",
        "Provides the gradio frontend to upload the image and display results",
        "Fetches the top k matches and displays metadata in frontend"
      ]
    },
    {
      title: "AgentBOB",
      description: "Advanced Whiskey Recommendation System based on previous user purchases and their budgets and other factors. Built for bounty.",
      image: project5Image,
      technologies: ["Python", "HuggingFace", "FASTAPI"],
      github: "https://github.com/Davda-James/Agent_BOB",
      live: "https://baxus-7z5a.onrender.com/",
      featured: true,
      live_link: true,
      youtube: "",
      date: "April 2025",
      award: "Got access to dev group",
      achievements: [
        "REST endpoint that sends the recommendations as response",
        "Uses the user purchase history and budget to recommend the best whiskey",
        "Includes some rule based conditions as well",
        
      ]
    },
    {
      title: "Garud",
      description: "A mobile app for IIT Mandi to track IIT Mandi's buses real time location and get real time notifications from drivers. Besides these can check the bus real time speed and time it will take to reach the destination.",
      image: project6Image,
      technologies: ["Flutter", "Google Maps API", "Firebase", "Dart"],
      github: "https://github.com/Davda-James/dp",
      live: "#",
      featured: true,
      live_link: false,
      date: "November 2024",
      award: "",
      achievements: [
        "Uses the Google Maps API and flutter library geolocator to track the buses real time",
        "Uses the firebase real time database to store the bus data",
        "Provides the real time notifications to the users using cloud firestore"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-inter mb-4">
            Featured <span className="text-foreground">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The Workshop
          </p>
        </div>
        
        <div ref={featuredRef} className="space-y-8">
          {/* All Projects - Unified Grid */}
          <div 
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
              featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`overflow-hidden bg-card/30 backdrop-blur-glass border border-white/10 hover:bg-card/50 hover:shadow-elegant transition-all duration-700 group ${
                  featuredVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-90'
                }`}
                style={{ animationDelay: featuredVisible ? `${index * 0.2}s` : '0s' }}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/20"></div>
                  
                  {/* Date Badge - Top Left */}
                  {project.date && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-foreground">{project.date}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Award Badge - Top Right */}
                  {project.award && (
                    <div className="absolute top-4 right-4">
                      <div className="group/award relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-sm group-hover/award:blur-md transition-all duration-300"></div>
                        {/* Main badge */}
                        <div className="relative bg-white/10 dark:bg-white/15 backdrop-blur border border-white/40 text-foreground px-3 py-1.5 rounded-full text-xs font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 hover:border-primary/50 hover:bg-white/20">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <span className="font-medium">
                              {project.award}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Featured Badge - Bottom Right */}
                  {/* {project.featured && (
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground border border-primary/30 shadow-lg">
                        Featured
                      </Badge>
                    </div>
                  )} */}
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p
                          className="text-muted-foreground text-sm leading-relaxed line-clamp-3 cursor-pointer"
                          style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
                          tabIndex={0}
                        >
                          {project.description}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-md text-left whitespace-pre-line">
                        {project.description}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Key Achievements - Only for featured projects */}
                  {project.featured && project.achievements && (
                    <div className="space-y-2 ml-4">
                      <h4 className="font-semibold flex items-center gap-2 text-sm">
                        <Award className="h-3 w-3 text-primary" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <SiGithub className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    {project.live_link && (
                      <Button 
                        variant="outline"
                        size="sm" 
                        className="border-neutral-300 dark:border-white/60 text-foreground bg-white/70 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 hover:border-neutral-400 dark:hover:border-white shadow-sm font-semibold transition-all duration-300"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.featured ? 'Live Demo' : 'View'}
                      </Button>
                    )}
                    {project.youtube && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-red-500/50 hover:border-red-500 hover:bg-red-500/10 text-red-500 hover:text-red-400 transition-all duration-300"
                        onClick={() => window.open(project.youtube, '_blank')}
                      > 
                        <SiYoutube className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
