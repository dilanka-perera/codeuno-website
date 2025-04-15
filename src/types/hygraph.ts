export interface Color {
  hex: string;
}

export interface ImageAsset {
  url: string;
  width: number;
  height: number;
  fileName: string;
}

export interface RichText {
  html: string;
}

export interface Paragraph {
  __typename: "Paragraph";
  id: string;
  slug: string;
  richText: RichText;
}

export interface Tcpi {
  slug: string;
  title: string;
  description: RichText;
  buttonText: string;
  buttonUrl: string;
  imageFirst: boolean;
  image: ImageAsset;
  backgroundColour: Color;
  textColour: Color;
}

export interface TcpiCollection {
  __typename: "TcpiCollection";
  slug: string;
  tcpis: Tcpi[];
}

export interface FlipCard {
  slug: string;
  title: string;
  description: string;
  image: ImageAsset;
  themeColour: Color;
}

export interface FlipCardCollection {
  __typename: "FlipCardCollection";
  id: string;
  slug: string;
  flipCards: FlipCard[];
}

export interface Tech {
  slug: string;
  techName: string;
  logo: ImageAsset;
}

export interface TechStack {
  slug: string;
  techs: Tech[];
}

export interface TechStackCollection {
  __typename: "TechStackCollection";
  id: string;
  slug: string;
  techStacks: TechStack[];
  cardColour: Color;
}

export type SectionItem =
  | Paragraph
  | TcpiCollection
  | FlipCardCollection
  | TechStackCollection;

export interface Section {
  slug: string;
  title: string;
  tableOfContentEntry: string;
  backgroundColour: Color;
  textColour: Color;
  sectionItems: SectionItem[];
}

export interface CarousalItem {
  slug: string;
  title: string;
  description: string;
  image: ImageAsset;
}

export interface Carousal {
  __typename: "Carousal";
  slug: string;
  carousalItems: CarousalItem[];
}

export interface HeroBanner {
  __typename: "HeroBanner";
  slug: string;
  title: string;
  description: string;
  image: ImageAsset;
}

export type HeroSection = Carousal | HeroBanner | null;

export interface Page {
  slug: string;
  urlPath: string;
  heroSection: HeroSection;
  sections: Section[];
  backgroundColour: Color;
}

export interface Website {
  headerLogo: ImageAsset;
  footerLogo: ImageAsset;
  homePage: Page;
  pages: Page[];
}

export interface WebsiteQueryResponse {
  website: Website;
}
