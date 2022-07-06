import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "@components/common";
import EnrolmentPage from "@components/pages/enrolment";
import { withGlobalData } from "@hoc/withGlobalData";
import { initializeApollo } from "@utils/apolloClient";
import { ListDataQuery } from "@gql/categoriesGQL";

interface EnrolmentPageProps {
  pageData: any;
  navigation: Array<any>;
  applyNow: Array<any>;
  dataGender: Array<any>;
  dataReligion: Array<any>;
  dataLanguage: Array<any>;
  dataRelationToStudent: Array<any>;
  dataCountry: Array<any>;
}

export default function Enrolment({
  navigation,
  pageData,
  applyNow,
  dataGender,
  dataReligion,
  dataLanguage,
  dataRelationToStudent,
  dataCountry,
  ...props
}: EnrolmentPageProps) {
  const formatedGender = dataGender?.map((element) => {
    return {
      value: element.dataCodeValue,
      label: element.title,
    };
  });
  const formatedReligion = dataReligion.map((element) => {
    return {
      value: element.dataCodeValue,
      label: element.title,
    };
  });
  const formatedLanguage = dataLanguage.map((element) => {
    return {
      value: element.dataCodeValue,
      label: element.title,
    };
  });
  const formatedRelationToStudent = dataRelationToStudent.map((element) => {
    return {
      value: element.dataCodeValue,
      label: element.title,
    };
  });
  const formatedCountry = dataCountry.map((element) => {
    return {
      value: element.dataCodeValue,
      label: element.title,
    };
  });

  return (
    <>
      <Head>
        <title>Home | Carey Grammar</title>
        <meta name="description" content="Traffic Next.js Starter" />
        <meta name="robots" content="index, follow" />
      </Head>
      <EnrolmentPage
        dataGender={formatedGender}
        dataLanguage={formatedLanguage}
        dataReligion={formatedReligion}
        dataRelationToStudent={formatedRelationToStudent}
        dataCountry={formatedCountry}
      />
    </>
  );
}

Enrolment.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const client = initializeApollo();
  const {
    data: {
      relationToStudentList: dataRelationToStudent,
      genderList: dataGender,
      religionList: dataReligion,
      languageList: dataLanguage,
      countryList: dataCountry,
    },
  } = await client.query({
    query: ListDataQuery,
  });

  return {
    props: {
      dataGender,
      dataReligion,
      dataLanguage,
      dataRelationToStudent,
      dataCountry,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});
