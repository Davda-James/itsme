import Experience from "@/components/Experience";
import Learnings from "@/components/Learnings";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import OpenSourceContributions from "@/components/OpenSourceContributions";
import Projects from "@/components/Projects";
import GithubContributions from "@/components/GithubContributionGraph";
import BottomBar from "@/components/BottomBar";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto w-full max-w-[800px] px-4 sm:px-6 md:px-8 pt-5 sm:pt-8 pb-[calc(5.5rem+env(safe-area-inset-bottom))]">
        <section id="home" aria-label="Introduction">
          <Hero />
        </section>

        <Experience />
        <Learnings />
        <Skills />
        <Achievements />
        <OpenSourceContributions />
        <Projects />
        <GithubContributions />
      </main>

      <BottomBar />
    </div>
  );
};

export default Index;
