import Head from "next/head";
import { Home } from "@components/pages";

const Homepage = () => {
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
};

export default Homepage;
