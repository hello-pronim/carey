import { gql } from "@apollo/client";

export const navigationQuery = gql`
  query navigationDrawer {
    nodes(navHandle: "mainNav", level: 1) {
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
