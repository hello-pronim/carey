import Head from "next/head";
import { Layout } from "@components/common";
import Home from "@components/pages/home";
import navigationMockData from "@utils/mockdata/navigation";

export default function Homepage() {
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

Homepage.getLayout = function getLayout(Page) {
  return <Layout {...Page.props}>{Page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
      navigation: navigationMockData,
    },
  };
}
