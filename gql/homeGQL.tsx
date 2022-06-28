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
              ... on quicklinks_BlockType {
                linkTitle
                linkUrl
                linkEntry {
                  uri
                }
              }
            }
            featurePanelUrl
            featurePanelImage {
              url
              width
              height
            }
            featurePanelLink {
              uri
            }
          }
        }
        campuses {
          ... on campus_default_Entry {
            title
            subtitle
            campusAccordionImage {
              url
              width
              height
            }
          }
        }
      }
    }
  }
`;
