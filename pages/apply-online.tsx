import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "@components/common";
import ApplicationPage from "@components/pages/application";
import { withGlobalData } from "@hoc/withGlobalData";
//import { initializeApollo } from "@utils/apolloClient";

interface ApplicationPageProps {
  pageData: any;
  navigation: Array<any>;
  applyNow: Array<any>;
}

export default function Application({
  navigation,
  pageData,
  applyNow,
  ...props
}: ApplicationPageProps) {
  return (
    <>
      <Head>
        <title>Home | Carey Grammar</title>
        <meta name="description" content="Traffic Next.js Starter" />
        <meta name="robots" content="index, follow" />
      </Head>
      <ApplicationPage />
    </>
  );
}

Application.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  return {
    props: {},
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});
