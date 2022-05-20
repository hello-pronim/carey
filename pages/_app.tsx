//@ts-nocheck - THIS IS ONLY HERE AS REACT 18 HAS BROKEN DEPENDENCIES ON SOME PACKAGES AND SCREWS UP THE BUILD

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { AppWrapper } from "@contexts/AppContext";
import { useApollo } from "@utils/apolloClient";

import globalStyles from "styles/global";
import "styles/typefaces.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  const getLayout = Component.getLayout ?? ((page) => page);
  globalStyles();

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AppWrapper>
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </AppWrapper>
      </ApolloProvider>
    </>
  );
}

export default App;
