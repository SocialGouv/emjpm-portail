import theme from "@socialgouv/emjpm-ui-theme";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { ThemeProvider } from "theme-ui";

import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function App({ Component, pageProps }) {
  const router = useRouter();
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
            background: #EBEFF5;
            height: 100%;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        `}</style>
      </Head>
      {router.pathname !== "/" && <Header />}
      <Component {...pageProps} />
      <Footer landing />
    </ThemeProvider>
  );
}

export default App;
