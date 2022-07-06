import { gql } from "@apollo/client";

export const CategoriesQuery: any = gql`
  query categories($group: [String]) {
    categories(group: $group) {
      id
      ... on dataLanguage_Category {
        id
        dataCodeValue
        title
      }
      ... on dataCountry_Category {
        id
        dataCodeValue
        title
      }
      ... on dataReligion_Category {
        id
        dataCodeValue
        title
      }
      ... on dataGender_Category {
        id
        dataCodeValue
        title
      }
      ... on dataRelationToOtherContact_Category {
        id
        dataCodeValue
        title
      }
      ... on dataRelationToStudent_Category {
        id
        dataCodeValue
        title
      }
    }
  }
`;
