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
                accordionLayout {
                  ... on accordionLayout_Heading_BlockType {
                    isOpened
                    headline
                  }
                  ... on accordionLayout_content_BlockType {
                    contentBlock
                  }
                  ... on accordionLayout_breakOut_BlockType {
                    breakOutBlock
                  }
                  ... on accordionLayout_button_BlockType {
                    buttonText
                    buttonUrl
                    buttonType
                    buttonSize
                    buttonTheme
                    arrowed
                    buttonEntry {
                      uri
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
