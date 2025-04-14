import { Section as SectionType } from "@/types/hygraph";
import Paragraph from "@/components/Sections/Paragraph";
import TcpiCollection from "@/components/Sections/TcpiCollection";
import HoverCardCollection from "@/components/Sections/HoverCardCollection";
import TechStackCollection from "@/components/Sections/TechStackCollection";

interface SectionProps {
  section: SectionType;
}

const Section = ({ section }: SectionProps) => {
  return (
    <div
      id={section.slug}
      className="pt-10"
      style={{
        backgroundColor: section.backgroundColour.hex,
        color: section.textColour.hex,
      }}
    >
      <div className="max-w-[1280px] mx-auto overflow-hidden px-6 md:px-10 text-center">
        <h2 className="font-[orbitron] pb-5 text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-center">
          {section.title}
        </h2>

        {section.sectionItems.map((item) => {
          switch (item.__typename) {
            case "Paragraph":
              return (
                <div key={item.slug} className="pb-10">
                  <Paragraph paragraph={item} />
                </div>
              );
            case "TcpiCollection":
              return (
                <div key={item.slug} className="pb-10">
                  <TcpiCollection tcpiCollection={item} />
                </div>
              );
            case "HoverCardCollection":
              return (
                <div key={item.slug} className="pb-10">
                  <HoverCardCollection hoverCardCollection={item} />
                </div>
              );
            case "TechStackCollection":
              return (
                <div key={item.slug} className="pb-10">
                  <TechStackCollection techStackCollection={item} />
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Section;
