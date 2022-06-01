import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "@components/common";
import General from "@components/pages/general";
import { GeneralPageQuery } from "@gql/pageGQL";
import { withGlobalData } from "@hoc/withGlobalData";
import { initializeApollo } from "@utils/apolloClient";

interface PageProps {
  pageData: any;
  navigation: Array<any>;
  headerNav: Array<any>;
  headerGlobals: Array<any>;
  footerGlobals: Array<any>;
  footerNav: Array<any>;
  sitemap: Array<any>;
}

export default function Page({ pageData }: PageProps) {
  return (
    <>
      <Head>
        <title>{pageData?.title} | Carey Grammar</title>
        <meta name="description" content="Traffic Next.js Starter" />
        <meta name="robots" content="index, follow" />
      </Head>
      <General pageData={pageData?.generalComponents} />
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = withGlobalData(
  async ({ params }) => {
    const client = initializeApollo();
    const {
      data: { entry: pageData },
    } = await client.query({
      query: GeneralPageQuery,
      variables: {
        slug: params.pageUri[params.pageUri?.length - 1],
      },
    });
    return {
      props: {
        pageData,
      },
      revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
    };
  }
);

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
