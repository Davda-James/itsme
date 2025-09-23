import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import OpenSourceContributions from "@/components/OpenSourceContributions";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import HireModal from "@/components/HireModal";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";

const Index = () => {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const { ref: heroHeadingRef, isVisible: isHeroVisible } = useElementOnScreen({
    threshold: 0.1,
  });

  return (
  <div className="min-h-screen font-inter bg-background transition-colors duration-300">
      {/* <Navigation onHireClick={() => setIsHireModalOpen(true)} showName={!isHeroVisible} /> */}
      <Navigation showName={!isHeroVisible} />
      <main>
        <section id="home">
          <Hero headingRef={heroHeadingRef}/>
        </section>
        <Skills />
        <Experience />
        <Achievements />
        <OpenSourceContributions />
        <Projects />
  {/* <Contact /> */}
      </main>
      <Footer />
      
      {/* Global Hire Modal */}
      {/* <HireModal 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)} 
      /> */}
    </div>
  );
};

export default Index;
