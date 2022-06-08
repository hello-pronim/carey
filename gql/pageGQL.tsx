import { gql } from "@apollo/client";

export const GeneralPageQuery = gql`
  query PageQuery($slug: [String] = "") {
    entry(slug: $slug, section: "generalPage") {
      title
      ... on generalPage_default_Entry {
        generalComponents {
          ... on generalComponents_threeColumnTable_BlockType {
            tableTitle
            colOneLabel
            colTwoLabel
            colThreeLabel
            threeColTable {
              ... on threeColTable_BlockType {
                groupTitle
                tableRow {
                  col1
                  col2
                  col3
                }
              }
            }
          }
          ... on generalComponents_contentBlock_BlockType {
            bodyText
            bgColor: backgroundColor
          }
          ... on generalComponents_featuredPanel_BlockType {
            panelVariant
            featuredPanel {
              ... on featurePanels_featurePanels_Entry {
                title
                panelContent
                buttonLabel
                buttonLink {
                  uri
                }
                imageOfStudent {
                  url
                }
                facilityCampus {
                  title
                }
                facilitySchool {
                  title
                }
              }
            }
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
