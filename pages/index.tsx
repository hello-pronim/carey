import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "@components/common";
import Home from "@components/pages/home";
import { withGlobalData } from "@hoc/withGlobalData";
import { HomePageQuery } from "@gql/homeGQL";
import { initializeApollo } from "@utils/apolloClient";

interface HomePageProps {
  pageData: any;
  navigation: Array<any>;
  applyNow: Array<any>;
}

export default function HomePage({
  navigation,
  pageData,
  applyNow,
  ...props
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>Home | Carey Grammar</title>
        <meta name="description" content="Traffic Next.js Starter" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Home heroData={pageData} applyNow={applyNow} />
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const client = initializeApollo();

  const {
    data: { entry: pageData },
  } = await client.query({
    query: HomePageQuery,
  });
  return {
    props: {
      pageData,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});
