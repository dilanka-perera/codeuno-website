import { GraphQLClient, gql } from "graphql-request";
import { WebsiteQueryResponse } from "@/types/hygraph";

const hygraph = new GraphQLClient(process.env.HYGRAPH_API!, {});

const WEBSITE_QUERY = gql`
  query Website {
    website(where: { slug: "website-codeuno" }) {
      headerLogo {
        ...ImageFields
      }
      footerLogo {
        ...ImageFields
      }
      homePage {
        ...PageFields
      }
      pages {
        ...PageFields
      }
    }
  }

  fragment PageFields on Page {
    slug
    urlPath
    heroSection {
      __typename
      ... on Carousal {
        slug
        carousalItems {
          slug
          title
          description
          image {
            ...ImageFields
          }
        }
      }
      ... on HeroBanner {
        slug
        title
        description
        image {
          ...ImageFields
        }
      }
    }
    sections {
      slug
      title
      tableOfContentEntry
      backgroundColour {
        hex
      }
      textColour {
        hex
      }
      sectionItems {
        __typename
        ... on Paragraph {
          id
          slug
          richText {
            html
          }
        }
        ... on TcpiCollection {
          slug
          tcpis {
            slug
            title
            description {
              html
            }
            buttonText
            buttonUrl
            imageFirst
            image {
              ...ImageFields
            }
            backgroundColour {
              hex
            }
            textColour {
              hex
            }
          }
        }
        ... on FlipCardCollection {
          id
          slug
          flipCards {
            slug
            title
            description
            image {
              ...ImageFields
            }
            themeColour {
              hex
            }
          }
        }
        ... on TechStackCollection {
          id
          slug
          techStacks {
            slug
            techs(first: 100) {
              ...TechFields
            }
          }
          cardColour {
            hex
          }
        }
      }
    }
    backgroundColour {
      hex
    }
  }

  fragment TechFields on Tech {
    slug
    techName
    logo {
      ...ImageFields
    }
  }

  fragment ImageFields on Asset {
    url
    width
    height
    fileName
  }
`;

export const getWebsiteData = async (): Promise<WebsiteQueryResponse> => {
  return await hygraph.request<WebsiteQueryResponse>(WEBSITE_QUERY);
};
