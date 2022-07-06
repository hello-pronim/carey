import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "@components/common";
import ApplicationPage from "@components/pages/application";
import { withGlobalData } from "@hoc/withGlobalData";
import { initializeApollo } from "@utils/apolloClient";
import { ApplyOnlinePageQuery } from "@gql/pageGQL";

interface ApplicationPageProps {
  pageData: any;
}

export default function Application({ pageData }: ApplicationPageProps) {
  return (
    <>
      <Head>
        <title>Apply Online | Carey Grammar</title>
      </Head>
      <ApplicationPage pageData={pageData} />
    </>
  );
}

Application.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const client = initializeApollo();

  const {
    data: { entry: pageData },
  } = await client.query({
    query: ApplyOnlinePageQuery,
  });

  return {
    props: { pageData },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});
