import { gql } from "@apollo/client";

export const navigationQuery = gql`
  query NavQuery {
    nodes(navHandle: "headerNav") {
      id
      nodeUri
      title
    }
  }
`;
