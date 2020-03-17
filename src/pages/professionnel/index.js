import getConfig from "next/config";
import React from "react";
import { Box, Flex, Heading } from "rebass";

import PageSection from "../../components/PageSection";

const { publicRuntimeConfig } = getConfig();

const Index = () => (
  <Flex bg="whiteGray">
    <Box width="100%" maxWidth={1200} mx="auto" textAlign="center">
      <Heading fontWeight="normal" fontSize={4} my={6} mx={4} textAlign="center">
        Bienvenue sur le portail de la Protection Juridique des Majeurs
      </Heading>
      <PageSection
        url={"/professionnel/je-suis-un-mandataire-individuel"}
        title={"Je suis un mandataire individuel"}
        image={`${publicRuntimeConfig.appUrl}/bg-pro-a.png`}
      />
      <PageSection
        url={"/professionnel/je-suis-un-prepose-d-etablissement"}
        title={"Je suis un préposé d'établissement"}
        image={`${publicRuntimeConfig.appUrl}/bg-pro-b.png`}
      />
      <PageSection
        url={"/professionnel/je-suis-un-service-de-mandataire"}
        title={"Je suis un service de mandataire"}
        image={`${publicRuntimeConfig.appUrl}/bg-pro-c.png`}
      />
    </Box>
  </Flex>
);

export default Index;
