import { HeroSection } from "@/types/hygraph";
import Carousal from "@/components/HeroSections/Carousal";

interface HeroSectionProps {
  heroSection: HeroSection;
}

const HeroSectionComponent = ({ heroSection }: HeroSectionProps) => {
  if (!heroSection) return null;

  switch (heroSection.__typename) {
    case "Carousal":
      return <Carousal items={heroSection.carousalItems} />;

    // Future types can go here
    // case "HeroBanner":
    //   return <HeroBanner data={heroSection} />;

    default:
      return null;
  }
};

export default HeroSectionComponent;
