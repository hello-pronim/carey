// QUERIES COMMENTED OUT FOR NOW TILL WE CAN FIX THE CRAFT DB ROLLBACK
import { gql } from "@apollo/client";
export const WhyCareyQuery = gql`
  query WhyCareyQuery {
    entry(section: "whyCarey") {
      title
      ... on whyCarey_whyCarey_Entry {
        whyCareyBanner {
          ... on whyCareyBanner_banner_BlockType {
            bannerText
            backgroundImage {
              url
              width
              height
            }
            videoUrl
            featurePanelTitle
            featurePanelBody
            featureVideoTitle
            featureVideoUrl
            featureDownloadTitle
            featureDownloadAsset {
              url
            }
          }
        }
      }
    }
  }
`;
