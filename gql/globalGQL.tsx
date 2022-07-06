import { gql } from "@apollo/client";

export const globalQuery = gql`
  query global {
    mainNav: nodes(navHandle: "mainNav", level: 1) {
      id
      label: title
      url: nodeUri
      newWindow
      subItems: children(level: 2) {
        id
        label: title
        url: nodeUri
        newWindow
        parent {
          url: nodeUri
        }
        subItems: children(level: 3) {
          id
          label: title
          url: nodeUri
          newWindow
          parent {
            url: nodeUri
            parent {
              url: nodeUri
            }
          }
        }
      }
    }
    headerNav: nodes(navHandle: "headerNav", level: 1) {
      id
      label: title
      url: nodeUri
      newWindow
      subItems: children(level: 2) {
        id
        label: title
        url: nodeUri
        newWindow
      }
    }
    footerNav: nodes(navHandle: "footerNav") {
      id
      label: title
      url: nodeUri
    }
    headerGlobals: globalSet(handle: "header") {
      ... on header_GlobalSet {
        id
        headerRightLinks {
          ... on headerRightLinks_BlockType {
            id
            itemlink
            toolTipActiveByDefault
            tooltip
            icon
          }
        }
      }
    }
    footerGlobals: globalSet(handle: "footer") {
      ... on footer_GlobalSet {
        id
        abn
        copyrightText
        cricos
        firstNationStatement
        socialLinks {
          ... on socialLinks_BlockType {
            id
            icon
            openInNewTab
            socialLink
            label
          }
        }
        legalLinks {
          ... on legalLinks_BlockType {
            id
            label
            entry {
              ... on generalPage_default_Entry {
                id
                uri
              }
            }
          }
        }
      }
    }
    sitemapColumn1: nodes(navHandle: "sitemapColumn1", level: 1) {
      id
      label: title
      url: nodeUri
      newWindow
      subItems: children(level: 2) {
        id
        label: title
        url: nodeUri
        newWindow
        subItems: children(level: 3) {
          id
          label: title
          url: nodeUri
          newWindow
        }
      }
    }
    sitemapColumn2: nodes(navHandle: "sitemapColumn2", level: 1) {
      id
      label: title
      url: nodeUri
      newWindow
      subItems: children(level: 2) {
        id
        label: title
        url: nodeUri
        newWindow
        subItems: children(level: 3) {
          id
          label: title
          url: nodeUri
          newWindow
        }
      }
    }
    sitemapColumn3: nodes(navHandle: "sitemapColumn3", level: 1) {
      id
      label: title
      url: nodeUri
      newWindow
      subItems: children(level: 2) {
        id
        label: title
        url: nodeUri
        newWindow
        subItems: children(level: 3) {
          id
          label: title
          url: nodeUri
          newWindow
        }
      }
    }
    sitemapColumn4: nodes(navHandle: "sitemapColumn4", level: 1) {
      id
      label: title
      url: nodeUri
      newWindow
      subItems: children(level: 2) {
        id
        label: title
        url: nodeUri
        newWindow
        subItems: children(level: 3) {
          id
          label: title
          url: nodeUri
          newWindow
        }
      }
    }
    sitemapColumn5: nodes(navHandle: "sitemapColumn5", level: 1) {
      id
      label: title
      url: nodeUri
      newWindow
      subItems: children(level: 2) {
        id
        label: title
        url: nodeUri
        newWindow
        subItems: children(level: 3) {
          id
          label: title
          url: nodeUri
          newWindow
        }
      }
    }
    applyNow: globalSet(handle: "applyNow") {
      ... on applyNow_GlobalSet {
        buttonLabel
        buttonLink {
          slug
          ancestors {
            slug
          }
        }
        buttonUrl
      }
    }
    sitemapColumn6: nodes(navHandle: "sitemapColumn6", level: 1) {
      id
      label: title
      url: nodeUri
      newWindow
      subItems: children(level: 2) {
        id
        label: title
        url: nodeUri
        newWindow
        subItems: children(level: 3) {
          id
          label: title
          url: nodeUri
          newWindow
        }
      }
    }
  }
`;
