import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";

const Achievements = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  const hackathonWins = [
    {
      title: "Move Spheron Tour",
      position: "1st Place",
      description: "Develop a decentralized application to track end to end supply chain from manufacturer to consumer using Aptos Chain",
      date: "September 2024",
      prize: "$500",
      participants: "Intra-IIT Hackathon",
      technologies: ["Python", "TensorFlow", "OpenCV", "React", "Node.js"],
      link: "https://github.com/example/smart-city"
    },
    {
      title: "HCLTech Hackathon",
      position: "3rd Place in CrowdFlow PS",
      description: "Built a solution using deep learning and computer vision for CrowdFlow problem statement",
      date: "May 2025",
      prize: "Certificate of Excellence",
      participants: "150+ teams",
      technologies: ["Solidity", "Web3.js", "React", "MongoDB"],
      link: "https://github.com/example/fintech-platform"
    },
  ];

  const certifications = [
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "July 2024",
      credentialId: "66a607451ea7d93715e037ad",
      validUntil: "Lifetime",
      skills: ["RESTAPIs", "Postman"],
      link: "https://badgr.com/public/assertions/cUBB2F4vRWef_9MeEtkIQw?identity__email=jrdavda007%40gmail.com"
    },
    {
      title: "Brandquezt",
      issuer: "Naukri.com",
      date: "Jun 2025",
      credentialId: "68590dac6c1aa41e163befc1",
      validUntil: "Lifetime",
      skills: ["Branding"],
      link: "https://drive.google.com/file/d/1iwWcMBkJ1pyJ7zPmw71-oxymhV9edEU_/view?usp=sharing"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-inter mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and certifications earned along the way.
          </p>
        </div>

        <div ref={achievementsRef} className="space-y-16">
          {/* Hackathon Wins Section */}
          <div className={`transition-all duration-1000 ${
            achievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-inter">Hackathon Wins</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {hackathonWins.map((hackathon, index) => (
                <Card
                  key={hackathon.title}
                  className={`group bg-card/30 backdrop-blur-glass border border-white/10 hover:bg-card/50 hover:shadow-elegant transition-all duration-500 ${
                    achievementsVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                  style={{ animationDelay: achievementsVisible ? `${index * 0.2}s` : '0s' }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg lg:text-xl font-bold group-hover:text-primary transition-colors">
                          {hackathon.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/30">
                            {hackathon.position}
                          </Badge>
                        </div>
                      </div>
                      {hackathon.link && (
                        <a
                          href={hackathon.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group/link"
                        >
                          <ExternalLink className="h-4 w-4 text-primary group-hover/link:scale-110 transition-transform" />
                        </a>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {hackathon.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{hackathon.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Trophy className="h-3 w-3" />
                          <span>{hackathon.prize}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-muted-foreground">
                          {hackathon.participants}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {hackathon.technologies.map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-secondary/50 border-secondary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className={`transition-all duration-1000 ${
            achievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '0.5s' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-inter">Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.title}
                  className={`group bg-card/30 backdrop-blur-glass border border-white/10 hover:bg-card/50 hover:shadow-elegant transition-all duration-500 ${
                    achievementsVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                  style={{ animationDelay: achievementsVisible ? `${0.5 + (index * 0.2)}s` : '0s' }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg lg:text-xl font-bold group-hover:text-accent transition-colors">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="text-base font-semibold text-foreground/80 mt-1">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors group/link"
                        >
                          <ExternalLink className="h-4 w-4 text-accent group-hover/link:scale-110 transition-transform" />
                        </a>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Issued: {cert.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-3 w-3" />
                          <span>Valid until: {cert.validUntil}</span>
                        </div>
                      </div>
                      <div className="text-right sm:text-left">
                        <div className="text-xs text-muted-foreground">
                          ID: {cert.credentialId}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Skills Covered</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs bg-accent/10 border-accent/30 text-accent"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;