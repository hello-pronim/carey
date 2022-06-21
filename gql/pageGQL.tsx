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
          ... on generalComponents_twoColumnTable_BlockType {
            twoColumnTable {
              ... on twoColumnTable_BlockType {
                groupLabel
                groupRows {
                  groupItem
                }
              }
            }
          }
          ... on generalComponents_oneColumnTable_BlockType {
            tableTitle
            oneColTable {
              ... on oneColTable_BlockType {
                groupLabel
                groupItems {
                  rowLabel
                }
              }
            }
          }
          ... on generalComponents_contentBlock_BlockType {
            bodyText
            dividerToggle
          }
          ... on generalComponents_breakoutContent_BlockType {
            bodyText
            brandColours
            dividerToggle
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
                backgroundGradient {
                  url
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
                    bodyText
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
            bodyText
            image {
              url
              width
              height
            }
          }
          ... on generalComponents_generalSideCareyBrand_BlockType {
            overHeadline
            headline
            bodyText
          }
          ... on generalComponents_whyCarey_BlockType {
            image {
              url
            }
            videoUrl
            scriptTitle
            headline
            bodyText
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
            bodyText
            featuredPanel {
              ... on featurePanels_featurePanels_Entry {
                backgroundGradient {
                  url
                }
                imageOfStudent {
                  url
                  width
                  height
                }
              }
            }
          }
          ... on generalComponents_images1up_BlockType {
            image1 {
              url
            }
            captionImage1
            includeDividerUnderneath
          }
          ... on generalComponents_images2up_BlockType {
            image1 {
              url
            }
            captionImage1
            image2 {
              url
            }
            captionImage2
            includeDividerUnderneath
          }
          ... on generalComponents_images2upVideo_BlockType {
            image1 {
              url
            }
            captionImage1
            image2 {
              url
            }
            videoLabel
            videoUrl
            captionImage2
            includeDividerUnderneath
          }
          ... on generalComponents_inlineGallery3up_BlockType {
            image1 {
              url
            }
            captionImage1
            image2 {
              url
            }
            captionImage2
            image3 {
              url
            }
            captionImage3
          }
          ... on generalComponents_cardsSectionOverview_BlockType {
            cardsetOverview {
              ... on cardsetOverview_BlockType {
                overheadline
                buttonLabel
                linkToPage {
                  title
                  uri
                }
                image {
                  url
                }
              }
            }
          }
          ... on generalComponents_cardsSubjects_BlockType {
            cardsetSubject {
              subjectTitle
            }
          }
          ... on generalComponents_cardsCampuses_BlockType {
            cardsetCampuses {
              ... on cardsetCampuses_BlockType {
                cardTitle
                cardContent
                buttonLabel
                buttonLink {
                  uri
                }
                campusImage {
                  url
                }
              }
            }
          }
          ... on generalComponents_sessionTimes_BlockType {
            title: tableTitle
            ctaTitle
            ctaBody: contentText
            sessions: sessionTimeTable {
              ... on sessionTimeTable_BlockType {
                date: sessionDate
                status: sessionStatus
                link: sessionLink
              }
            }
          }
        }
      }
    }
  }
`;
