import { Logo } from "@socialgouv/emjpm-ui-core";
import theme from "@socialgouv/emjpm-ui-theme";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { Flex, Link } from "rebass";
import { ThemeProvider } from "theme-ui";

import Footer from "../components/Footer";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Portail de la Protection Juridique des Majeurs</title>
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
          a {
            text-decoration: none;
            color: inherit;
          }
        `}</style>
      </Head>
      <Flex p={1} alignItems="center" flexWrap="wrap" justifyContent="space-between">
        <NextLink href="/" passHref>
          <Link color="inherit">
            <Logo title="emjpm.pjm.fr - Protection Juridique des Majeurs" />
          </Link>
        </NextLink>
      </Flex>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
