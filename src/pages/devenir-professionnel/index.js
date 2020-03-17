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
        url={"/devenir-professionnel/l-agrement-des-mandataires-judiciaires"}
        title={"L'agrément des mandataires judiciaires"}
        image={`${publicRuntimeConfig.appUrl}/bg-devenir-pro-a.png`}
      />
      <PageSection
        url={"/devenir-professionnel/a-formation-au-certificat-national-de-competences"}
        title={"La formation au certificat national de compétences"}
        image={`${publicRuntimeConfig.appUrl}/bg-devenir-pro-b.png`}
      />
      <PageSection
        url={"/devenir-professionnel/appel-a-projet"}
        title={"Appel à projet"}
        image={`${publicRuntimeConfig.appUrl}/bg-devenir-pro-c.png`}
      />
    </Box>
  </Flex>
);

export default Index;
