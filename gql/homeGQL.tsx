// QUERIES COMMENTED OUT FOR NOW TILL WE CAN FIX THE CRAFT DB ROLLBACK

import { gql } from "@apollo/client";

export const HomePageQuery = gql`
  query HomePageQuery {
    entry(section: "homepage") {
      title
      ... on homepage_homepage_Entry {
        homePageBanner {
          ... on homePageBanner_banner_BlockType {
            bannerText
            backgroundImage {
              url
              width
              height
            }
            videoUrl
            quicklinks {
              linkText
              link
            }
            featurePanelUrl
            featurePanelImage {
              url
            }
            featurePanelLink {
              uri
            }
          }
        }
      }
    }
  }
`;
