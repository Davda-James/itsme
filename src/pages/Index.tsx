import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import OpenSourceContributions from "@/components/OpenSourceContributions";
// import Projects from "@/components/Projects";
import BottomBar from "@/components/BottomBar";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import Achievements from "@/components/Achievements";
import GithubContributions from "@/components/GithubContributionGraph";
import Projects from "@/components/Projects";

const Index = () => {
  const { ref: heroHeadingRef, isVisible: isHeroVisible } = useElementOnScreen({
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-[800px] px-4 sm:px-6 md:px-8 py-8 sm:py-12 flex flex-col relative">
        <section id="home">
          <Hero headingRef={heroHeadingRef} />
        </section>
        <Experience />
        <Skills />
        <Achievements />
        <OpenSourceContributions />
        <Projects />
        <GithubContributions />
        <BottomBar />
        <div className="h-24 sm:h-20" />
      </div>
    </div>
  );
};

export default Index;
