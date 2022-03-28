import Head from "next/head";
import { Layout } from "@components/common";
import { Home } from "@components/pages";

const Homepage = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Traffic Next.js</title>
        <meta name="description" content="Traffic Next.js Starter" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Home />
    </Layout>
  );
};

export default Homepage;
