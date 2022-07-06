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

export const ListDataQuery: any = gql`
  query selectableQuery {
    languageList: categories(group: "dataLanguage") {
      id
      ... on dataLanguage_Category {
        id
        dataCodeValue
        title
      }
    }
    countryList: categories(group: "dataCountry") {
      id
      ... on dataCountry_Category {
        id
        dataCodeValue
        title
      }
    }
    religionList: categories(group: "dataReligion") {
      id
      ... on dataReligion_Category {
        id
        dataCodeValue
        title
      }
    }
    genderList: categories(group: "dataGender") {
      ... on dataGender_Category {
        id
        dataCodeValue
        title
      }
    }
    relationToOtherContactList: categories(
      group: "dataRelationToOtherContact"
    ) {
      ... on dataRelationToOtherContact_Category {
        id
        dataCodeValue
        title
      }
    }
    relationToStudentList: categories(group: "dataRelationToStudent") {
      ... on dataRelationToStudent_Category {
        id
        dataCodeValue
        title
      }
    }
  }
`;
