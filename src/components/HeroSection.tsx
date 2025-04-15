import { HeroSection } from "@/types/hygraph";
import Carousal from "@/components/HeroSections/Carousal";
import HeroBanner from "./HeroSections/HeroBanner";

interface HeroSectionProps {
  heroSection: HeroSection;
}

const HeroSectionComponent = ({ heroSection }: HeroSectionProps) => {
  if (!heroSection) return null;

  switch (heroSection.__typename) {
    case "Carousal":
      return <Carousal carousal={heroSection} />;
    case "HeroBanner":
      return <HeroBanner heroBanner={heroSection} />;
    default:
      return null;
  }
};

export default HeroSectionComponent;
