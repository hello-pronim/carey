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
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
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
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
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
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_contentBlock_BlockType {
            bodyText
            dividerToggle
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_breakoutContent_BlockType {
            bodyText
            brandColours
            dividerToggle
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_contentTextImage_BlockType {
            layout
            image {
              url
              height
              width
            }
            imageAspect
            bodyText
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_contentTextFullBleedImage_BlockType {
            layout
            bodyText
            image {
              url
              height
              width
            }
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_featuredPanel_BlockType {
            panelVariant
            featuredPanel {
              ... on featurePanels_featurePanels_Entry {
                title
                panelContent
                buttonLabel
                buttonLink {
                  slug
                  ancestors {
                    slug
                  }
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
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
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
                      slug
                      ancestors {
                        slug
                      }
                    }
                  }
                }
              }
            }
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
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
              slug
              ancestors {
                slug
              }
            }
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_mapBlock_BlockType {
            latitude
            longitude
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
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
          ... on generalComponents_generalScriptImage_BlockType {
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
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
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
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_images1up_BlockType {
            image1 {
              url
              width
              height
            }
            captionImage1
            includeDividerUnderneath
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_images2up_BlockType {
            image1 {
              url
              width
              height
            }
            captionImage1
            image2 {
              url
              width
              height
            }
            captionImage2
            includeDividerUnderneath
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_images2upVideo_BlockType {
            image1 {
              url
              width
              height
            }
            captionImage1
            image2 {
              url
              width
              height
            }
            videoLabel
            videoUrl
            captionImage2
            includeDividerUnderneath
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_inlineGallery3up_BlockType {
            image1 {
              url
              width
              height
            }
            captionImage1
            image2 {
              url
              width
              height
            }
            captionImage2
            image3 {
              url
              width
              height
            }
            captionImage3
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
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
                  title
                }
              }
            }
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_cardsSubjects_BlockType {
            cardsetSubject {
              subjectTitle
            }
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
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
                  ancestors {
                    slug
                  }
                }
                campusImage {
                  url
                  width
                  height
                }
              }
            }
            jumpToToggle {
              ... on jumpToToggle_BlockType {
                available
                anchorSlug
              }
            }
          }
          ... on generalComponents_jumpTo_BlockType {
            jumpToBlock {
              title
              anchorSlug
            }
          }
          ... on generalComponents_launchGallery_BlockType {
            galleryTitle
            buttonLabel
            gallery {
              ... on gallery_default_Entry {
                title
                gallerySchool {
                  title
                  uri
                }
                galleryCampus {
                  title
                  uri
                }
                galleryImages {
                  ... on galleryImages_BlockType {
                    galleryImage {
                      url
                    }
                    imageCaption
                  }
                }
              }
            }
          }
          ... on generalComponents_sessionTimeTable_BlockType {
            title: tableTitle
            ctaTitle
            ctaBody: contentText
            sessions: sessionTimeTable {
              ... on sessionTimeTable_BlockType {
                date
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

export const ApplyOnlinePageQuery = gql`
  query ApplyPageQuery {
    entry(slug: "apply-online") {
      title
      ... on applyOnline_applyOnline_Entry {
        id
        applyOnlineBanner {
          ... on applyOnlineBanner_BlockType {
            id
            headline
            subText
            preText
          }
        }
        applicationSupportBox
        seomatic {
          metaTitleContainer
          metaTagContainer
          metaLinkContainer
        }
        instructionsBlock {
          ... on instructionsBlock_BlockType {
            id
            headline
            richText
          }
        }
        concertina {
          ... on concertina_BlockType {
            id
            details
            intro
          }
        }
      }
    }
  }
`;
