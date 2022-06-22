import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "@components/common";
import EnrolmentPage from "@components/pages/enrolment";
import { withGlobalData } from "@hoc/withGlobalData";
//import { initializeApollo } from "@utils/apolloClient";

interface EnrolmentPageProps {
  pageData: any;
  navigation: Array<any>;
  applyNow: Array<any>;
}

export default function Enrolment({
  navigation,
  pageData,
  applyNow,
  ...props
}: EnrolmentPageProps) {
  return (
    <>
      <Head>
        <title>Home | Carey Grammar</title>
        <meta name="description" content="Traffic Next.js Starter" />
        <meta name="robots" content="index, follow" />
      </Head>
      <EnrolmentPage />
    </>
  );
}

Enrolment.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  return {
    props: {},
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});
