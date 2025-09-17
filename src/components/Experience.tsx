import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  const experiences = [
    {
      role: "Hacktoberfest2024",
      company: "DigitalOcean",
      location: "Remote",
      period: "October 2024- 1 Month",
      description: "Open Source Contributions",
      achievements: [
        "Added an AI Bot Script using Google Gemini API for conversational and creative response generation [PR #991](https://github.com/python-geeks/Automation-scripts/pull/991)",
        "Built a Weather Notifier GUI app in Python using Tkinter and OpenWeatherMap API [PR #963](https://github.com/python-geeks/Automation-scripts/pull/963)",
        "Translated and documented the Travelling Salesman Problem (C) to English for better global accessibility [PR #359](https://github.com/kelvins/algorithms-and-data-structures/pull/359)"
      ],
      technologies: ["Python", "Gemini", "Tkinter", "OpenWeatherMap API" ]
    },
      {
      role: "GirlScript Summer of Code (GSSoC)",
      company: "GirlScript Foundation",
      location: "Remote",
      period: "June 2024 - July 2024",
      description: "First open source contribution",
      achievements: [
        "Standardized dependency versions in `requirements.txt` to prevent compatibility issues and streamline the setup process for new contributors [PR #95](https://github.com/Soumya-Kushwaha/SoundScape/pull/95)",
        "Implemented \"Frequency vs Energy\" plot for real-time audio using Fourier Coefficients, and integrated it into the existing GUI to maintain UX consistency [PR #94](https://github.com/Soumya-Kushwaha/SoundScape/pull/94)",
      ],
      technologies: ["Python", "Mathematical Modelling", "Fourier Transform", "Data Visualization"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">      
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-inter mb-4">
            <span className="text-foreground">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The Build Log
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-300 dark:bg-neutral-700"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative transition-all duration-1000 ${
                  timelineVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: timelineVisible ? `${index * 0.3}s` : '0s' }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                
                <div className="ml-20">
                  <Card className="group bg-card/30 backdrop-blur-glass border border-white/10 hover:bg-card/50 hover:shadow-elegant transition-all duration-500">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-foreground/80 mt-1">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => {
                            // Parse markdown-style links [text](url)
                            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                            const parts = [];
                            let lastIndex = 0;
                            let match;

                            while ((match = linkRegex.exec(achievement)) !== null) {
                              // Add text before the link
                              if (match.index > lastIndex) {
                                parts.push(achievement.slice(lastIndex, match.index));
                              }
                              
                              // Add the link
                              parts.push(
                                <a
                                  key={`${achIndex}-${match.index}`}
                                  href={match[2]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                                >
                                  {match[1]}
                                </a>
                              );
                              
                              lastIndex = match.index + match[0].length;
                            }
                            
                            // Add remaining text after the last link
                            if (lastIndex < achievement.length) {
                              parts.push(achievement.slice(lastIndex));
                            }
                            
                            // If no links found, just return the text
                            if (parts.length === 0) {
                              parts.push(achievement);
                            }

                            return (
                              <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">
                                  {parts}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="font-semibold">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className={`bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300 ${
                                timelineVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                              }`}
                              style={{ 
                                animationDelay: timelineVisible 
                                  ? `${(index * 0.3) + (techIndex * 0.1)}s` 
                                  : '0s' 
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;