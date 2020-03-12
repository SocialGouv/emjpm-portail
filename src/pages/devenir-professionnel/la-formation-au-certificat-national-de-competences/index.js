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
          "/devenir-professionnel/l-agrement-des-mandataires-judiciaires/l-agrement-des-mandataires-exercant-a-titre-individuel"
        }
        title={"L'agrément des mandataires exercant à titre individuel"}
        image={`${publicRuntimeConfig.appUrl}/bg-a.png`}
      />
      <PageSection
        url={
          "/devenir-professionnel/l-agrement-des-mandataires-judiciaires/l-autorisation-des-services-mandataires-a-la-protection-juridique-des-majeurs"
        }
        title={"L'autorisation des services mandataires à la protection juridique des majeurs"}
        image={`${publicRuntimeConfig.appUrl}/bg-b.png`}
      />
      <PageSection
        url={
          "/devenir-professionnel/l-agrement-des-mandataires-judiciaires/la-declaration-des-preposes-d-etablissement"
        }
        title={"La déclaration des préposés d'établissement"}
        image={`${publicRuntimeConfig.appUrl}/bg-c.png`}
      />
    </Box>
  </Flex>
);

export default Index;
