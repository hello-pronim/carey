import { gql } from "@apollo/client";

export const navigationQuery = gql`
  query navigationDrawer {
    nodes(navHandle: "mainNav", level: 1) {
      id
      label: title
      nodeUri
      url
      newWindow
      subItems: children(level: 2) {
        id
        label: title
        nodeUri
        url
        newWindow
        subItems: children(level: 3) {
          id
          label: title
          nodeUri
          url
          newWindow
        }
      }
    }
  }
`;
