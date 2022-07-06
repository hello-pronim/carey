import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "@components/common";
import WhyCarey from "@components/pages/whyCarey";
import { withGlobalData } from "@hoc/withGlobalData";
import { WhyCareyQuery } from "@gql/whyCareyGQL";
import { initializeApollo } from "@utils/apolloClient";

interface WhyCareyPageProps {
  pageData: any;
  navigation: Array<any>;
  applyNow: Array<any>;
}

export default function WhyCareyPage({
  navigation,
  pageData,
  applyNow,
  ...props
}: WhyCareyPageProps) {
  return (
    <>
      <Head>
        <title>{pageData.title} | Carey Grammar</title>
        <meta name="description" content="Traffic Next.js Starter" />
        <meta name="robots" content="index, follow" />
      </Head>
      <WhyCarey pageData={pageData} applyNow={applyNow} />
    </>
  );
}

WhyCareyPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const client = initializeApollo();

  const {
    data: { entry: pageData },
  } = await client.query({
    query: WhyCareyQuery,
  });
  return {
    props: {
      pageData,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});
