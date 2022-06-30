// QUERIES COMMENTED OUT FOR NOW TILL WE CAN FIX THE CRAFT DB ROLLBACK

import { gql } from "@apollo/client";

export const LifeCareyPageQuery = gql`
  query LifeCareyPageQuery {
    entry(section: "lifeAtCarey") {
      title
      ... on lifeAtCarey_lifeAtCarey_Entry {
        headerMainHeadline
        headerSubHeadline
        headerBackground {
          url
          width
          height
        }
        peopleSelection {
          ... on profiles_default_Entry {
            title
            peopleTitle
            lifeHeroImage {
              url
              width
              height
              focalPoint
            }
            lifeVideoLoop
            lifeVideoUrl
            lifeVideoButtonLabel
          }
        }
        blockHeadline {
          ... on blockHeadline_blockHeadlineContent_BlockType {
            isH1
            text
            alignment
          }
        }
      }
    }
  }
`;
