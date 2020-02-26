import Head from "next/head";
import Link from "next/link";
import { Card, Heading4 } from "@socialgouv/emjpm-ui-core";
import { Box } from "rebass";

import PageSection from "../components/PageSection";

const Index = () => (
  <Box bg="whiteGray">
    <Box maxWidth={1200} mx="auto" overflow="hidden">
      <Head>
        <title>eMJPM Portail</title>
      </Head>
      <Heading4
        textAlign="center"
        my={6}
      >
        Bienvenue sur le site de la protection juridique des majeurs
      </Heading4>
      <PageSection title="Je suis un mandataire individuel" url="/individuel" />
      <PageSection title="Je suis un service de mandataire" url="/service" />
      <PageSection title="Je suis un mandataire préposé d'établissement" url="/prepose" />
    </Box>
  </Box>
);

export default Index;
