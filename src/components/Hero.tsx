const Hero = ({
  headingRef,
}: {
  headingRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <header className="pb-4 border-b border-muted-foreground/20">
      <div className="flex flex-col gap-2">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl font-semibold leading-tight text-foreground"
        >
          hi <span>👋</span> I'm james
        </h1>
      </div>
    </header>
  );
};

export default Hero;
