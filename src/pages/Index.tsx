import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import OpenSourceContributions from "@/components/OpenSourceContributions";
// import Projects from "@/components/Projects";
import BottomBar from "@/components/BottomBar";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import Achievements from "@/components/Achievements";

const Index = () => {
  const { ref: heroHeadingRef, isVisible: isHeroVisible } = useElementOnScreen({
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-[800px] px-8 py-12 flex flex-col relative">
        <section id="home">
          <Hero headingRef={heroHeadingRef}/>
        </section>
        <Experience />
        <Skills />
        <Achievements />
        <OpenSourceContributions />
        {/* <Projects /> */}
        <BottomBar />
      </div>
    </div>
  );
};

export default Index;
