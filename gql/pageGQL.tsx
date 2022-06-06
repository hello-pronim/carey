import { gql } from "@apollo/client";

export const GeneralPageQuery = gql`
  query PageQuery($slug: [String] = "") {
    entry(slug: $slug, section: "generalPage") {
      title
      ... on generalPage_default_Entry {
        generalComponents {
          # ... on generalComponents_learningCentre_BlockType {
          #   tableTitle
          #   location
          #   lcTableGroup {
          #     ... on lcTableGroup_BlockType {
          #       groupTitle
          #       pricingTable {
          #         rowLabel
          #         fullYear
          #         perBilling
          #       }
          #     }
          #   }
          # }
          ... on generalComponents_contentBlock_BlockType {
            bodyText
            bgColor: backgroundColor
          }
          ... on generalComponents_accordionsSet_BlockType {
            accordionSetType
            accordions {
              ... on accordions_BlockType {
                headline
                contentBlock
                breakOutBlock
                buttonText
                buttonEntry {
                  uri
                }
                buttonColor
                buttonArrow
                buttonUrl
              }
            }
          }
        }
      }
    }
  }
`;
