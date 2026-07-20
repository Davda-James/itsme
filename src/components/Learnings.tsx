import SectionHeading from "@/components/SectionHeading";
import ExpandableEntry from "@/components/ExpandableEntry";
import { learnings } from "@/lib/learnings";

const Learnings = () => {
  return (
    <section id="learnings" className="py-6 sm:py-8" aria-labelledby="learnings-heading">
      <SectionHeading id="learnings">
        <span id="learnings-heading">Learnings</span>
      </SectionHeading>

      <div className="flex flex-col -mx-1 sm:mx-0">
        {learnings.map((item) => (
          <ExpandableEntry
            key={`${item.company}-${item.timeline}`}
            title={item.company}
            subtitle={item.role}
            meta={item.timeline}
            description={item.description}
            technologies={item.technologies}
            logo={item.logo}
            links={item.links}
          />
        ))}
      </div>
    </section>
  );
};

export default Learnings;
