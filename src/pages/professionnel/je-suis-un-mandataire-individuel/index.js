import getConfig from "next/config";
import React from "react";
import { Box, Flex, Heading } from "rebass";

import PageSection from "../../../components/PageSection";

const { publicRuntimeConfig } = getConfig();

const Index = () => (
  <Flex bg="whiteGray">
    <Box width="100%" maxWidth={1200} mx="auto" textAlign="center">
      <Heading fontWeight="normal" fontSize={4} my={6} mx={4} textAlign="center">
        Bienvenue sur le portail de la Protection Juridique des Majeurs
      </Heading>
      <PageSection
        url={
          "/professionnel/je-suis-un-mandataire-individuel/les-obligations-a-l-issue-de-la-notification"
        }
        title={"Les obligations à l'issue de la notification"}
        image={`${publicRuntimeConfig.appUrl}/bg-a.png`}
      />
      <PageSection
        url={
          "/professionnel/je-suis-un-mandataire-individuel/les-obligations-en-tant-que-mandataire-individuel"
        }
        title={"Les obligations en tant que mandataire individuel"}
        image={`${publicRuntimeConfig.appUrl}/bg-a.png`}
      />
      <PageSection
        url={
          "/professionnel/je-suis-un-mandataire-individuel/le-financement-des-mandataires-individuel"
        }
        title={"Le financement des mandataires individuel"}
        image={`${publicRuntimeConfig.appUrl}/bg-a.png`}
      />
    </Box>
  </Flex>
);

export default Index;
