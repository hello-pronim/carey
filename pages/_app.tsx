import { Global, ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { AppProps } from "next/app";
import global from "styles/global";
import theme from "styles/theme";
import "styles/typefaces.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
