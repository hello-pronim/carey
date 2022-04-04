import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import globalStyles from "styles/global";
import "styles/typefaces.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  globalStyles();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Android */}
        <link
          rel="shortcut icon"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="shortcut icon"
          sizes="192x192"
          href="/android-chrome-512x512.png"
        />
        {/* ios */}
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="120x120"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default App;
