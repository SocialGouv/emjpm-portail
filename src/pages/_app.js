import Head from "next/head";
import { Box, Flex } from "rebass";
import { Header } from "@socialgouv/emjpm-ui-components";
import { Card } from "@socialgouv/emjpm-ui-core";
import { ThemeProvider } from "theme-ui";
import theme from "@socialgouv/emjpm-ui-theme";

import Nav from "../components/nav";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>eMJPM Portail</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Quicksand:400,700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html {
            font-family: "Open Sans";
          }

          html,
          body,
          div#__next {
            margin: 0;
            background: white;
            height: 100%;
          }
        `}</style>
      </Head>

      <Header isDisconnected />
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;
