import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { withGlobalData } from "@hoc/withGlobalData";
import { Layout } from "@components/common";
import Test from "@components/pages/test";

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Test | Carey Grammar</title>
        <meta name="description" content="Traffic Next.js Starter" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Test />
    </>
  );
}
TestPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  return {
    props: {
      pageData: {},
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});
