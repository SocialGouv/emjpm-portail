import { Heading4 } from "@socialgouv/emjpm-ui-core";
import getConfig from "next/config";
import Head from "next/head";
import React from "react";
import { Box } from "rebass";

const { publicRuntimeConfig } = getConfig();

import PageSection from "../components/PageSection";

const Index = () => (
  <Box bg="whiteGray">
    <Box maxWidth={1200} mx="auto" overflow="hidden">
      <Head>
        <title>eMJPM Portail</title>
      </Head>
      <Heading4 fontWeight="normal" textAlign="center" my={6}>
        Bienvenue sur le site de la protection juridique des majeurs
      </Heading4>
      <PageSection
        image={`${publicRuntimeConfig.appUrl}/bg-a.png`}
        title="Je suis un mandataire individuel"
        url="/individuel/les-obligations-a-l-issue-de-la-notification"
      />
      <PageSection
        image={`${publicRuntimeConfig.appUrl}/bg-b.png`}
        title="Je suis un service de mandataire"
        url="/service/les-obligations-a-l-issue-de-la-notification"
      />
      <PageSection
        image={`${publicRuntimeConfig.appUrl}/bg-c.png`}
        title="Je suis un mandataire préposé d'établissement"
        url="/prepose/la-declaration-des-preposes-d-etablissement"
      />
    </Box>
  </Box>
);

export default Index;
