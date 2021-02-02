import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { ThemeProvider } from "theme-ui";

import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { useMatomo } from "../stats/matomo";
import appTheme from "../theme";

function App({ Component, pageProps }) {
  const router = useRouter();
  useMatomo();
  return (
    <ThemeProvider theme={appTheme}>
      <Head>
        <title>Portail de la Protection Juridique des Majeurs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g"
        />
        <script src="/tarteaucitron/tarteaucitron.js" />
        <script src="/tarteaucitron/initTarteaucitron.js" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Open+Sans:ital,wght@0,600;0,700;1,400&family=Quicksand:wght@400;700&display=swap"
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
