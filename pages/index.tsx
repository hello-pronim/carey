import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "@components/common";
import Home from "@components/pages/home";
import { withGlobalData } from "@hoc/withGlobalData";
import navigationMockData from "@utils/mockdata/navigation";

interface HomePageProps {
  pageData: any;
  navigation: Array<any>;
}

export default function HomePage({ navigation, pageData }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Home | Traffic Next.js</title>
        <meta name="description" content="Traffic Next.js Starter" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Home />
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  return {
    props: {
      navigation: navigationMockData,
      pageData: {},
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});
