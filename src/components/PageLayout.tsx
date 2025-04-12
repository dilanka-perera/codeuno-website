// components/PageLayout.tsx
import HeroSectionComponent from "@/components/HeroSection";
import Section from "@/components/Section";
import { Page } from "@/types/hygraph";
import TableOfContents from "@/components/TableOfContents";

interface PageLayoutProps {
  page: Page;
}

const PageLayout = ({ page }: PageLayoutProps) => {
  return (
    <div
      className="text-[16px] sm:text-[18px] lg:text-[20px]"
      style={{
        backgroundColor: page.backgroundColour.hex,
      }}
    >
      {page.heroSection && (
        <HeroSectionComponent heroSection={page.heroSection} />
      )}

      <TableOfContents sections={page.sections} />

      {page.sections.map((section) => (
        <Section key={section.slug} section={section} />
      ))}
    </div>
  );
};

export default PageLayout;
