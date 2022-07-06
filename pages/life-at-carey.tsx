import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "@components/common";
import LifeCarey from "@components/pages/lifeCarey";
import { withGlobalData } from "@hoc/withGlobalData";
import { LifeCareyPageQuery } from "@gql/lifeCareyGQL";
import { initializeApollo } from "@utils/apolloClient";

interface LifeCareyPageProps {
  pageData: any;
  navigation: Array<any>;
}

export default function LifeCareyPage({
  navigation,
  pageData,
  ...props
}: LifeCareyPageProps) {
  return (
    <>
      <Head>
        <title>{pageData.title} | Carey Grammar</title>
        <meta name="description" content="Traffic Next.js Starter" />
        <meta name="robots" content="index, follow" />
      </Head>
      <LifeCarey pageData={pageData} />
    </>
  );
}

LifeCareyPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const client = initializeApollo();

  const {
    data: { entry: pageData },
  } = await client.query({
    query: LifeCareyPageQuery,
  });
  return {
    props: {
      pageData,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});
