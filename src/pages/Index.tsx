import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import OpenSourceContributions from "@/components/OpenSourceContributions";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HireModal from "@/components/HireModal";

const Index = () => {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-inter">
      <Navigation onHireClick={() => setIsHireModalOpen(true)} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <OpenSourceContributions />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
      {/* Global Hire Modal */}
      <HireModal 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
