// QUERIES COMMENTED OUT FOR NOW TILL WE CAN FIX THE CRAFT DB ROLLBACK

import { gql } from "@apollo/client";

export const GeneralPageQuery = gql`
  query PageQuery($slug: [String] = "") {
    entry(slug: $slug, section: "generalPage") {
      title
      ... on generalPage_default_Entry {
        generalComponents {
          # ... on generalComponents_threeColumnTable_BlockType {
          #   tableTitle
          #   colOneLabel
          #   colTwoLabel
          #   colThreeLabel
          #   threeColTable {
          #     ... on threeColTable_BlockType {
          #       groupTitle
          #       tableRow {
          #         col1
          #         col2
          #         col3
          #       }
          #     }
          #   }
          # }
          ... on generalComponents_contentBlock_BlockType {
            bodyText
          }
          ... on generalComponents_contentTextImage_BlockType {
            layout
            image {
              url
            }
            imageAspect
            bodyText
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
          ... on generalComponents_ctaButton_BlockType {
            buttonLabel
            buttonUrl
            buttonType
            buttonSize
            buttonTheme
            buttonArrow
            buttonLink {
              uri
            }
          }
          ... on generalComponents_mapBlock_BlockType {
            latitude
            longitude
          }
          ... on generalComponents_generalSideImage_BlockType {
            headline
            overHeadline
            videoUrl
            contentText
            image {
              url
              width
              height
            }
          }
          ... on generalComponents_generalSideCareyBrand_BlockType {
            overHeadline
            headline
            contentText
            buttonLabel
            buttonLink {
              uri
            }
            buttonUrl
          }
          ... on generalComponents_whyCarey_BlockType {
            image {
              url
            }
            videoUrl
            scriptTitle
            headline
            contentText
            buttonLabel
            buttonLink {
              uri
            }
            buttonUrl
            featureVideoTitle
            featureVideoUrl
            featureDownloadLinkTitle
            featureDownloadAsset {
              url
            }
          }

          ... on generalComponents_featureTextBlock_BlockType {
            bodyText
            featureLayout
            featureTextAlignment
          }
          ... on generalComponents_contentTextFeature_BlockType {
            layout
            overHeadline
            headline
            contentText
            buttonLabel
            buttonLink {
              uri
            }
            buttonUrl
            featuredPanel {
              ... on featurePanels_featurePanels_Entry {
                imageOfStudent {
                  url
                  width
                  height
                }
              }
            }
          }
          # ... on generalComponents_sessionTimes_BlockType {
          #   title: tableTitle
          #   ctaTitle
          #   ctaContent
          #   sessions: sessionTimeTable {
          #     ... on sessionTimeTable_BlockType {
          #       date: sessionDate
          #       status: sessionStatus
          #       link: sessionLink
          #     }
          #   }
          # }
        }
      }
    }
  }
`;
