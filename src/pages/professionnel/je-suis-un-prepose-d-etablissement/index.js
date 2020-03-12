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
          "/professionnel/je-suis-un-prepose-d-etablissement/la-declaration-des-preposes-d-etablissement"
        }
        title={"La déclaration des préposés d'établissement"}
        image={`${publicRuntimeConfig.appUrl}/bg-a.png`}
      />
      <PageSection
        url={
          "/professionnel/je-suis-un-prepose-d-etablissement/les-obligations-en-tant-que-prepose-d-etablissement"
        }
        title={"Les obligations en tant que préposé d'établissement"}
        image={`${publicRuntimeConfig.appUrl}/bg-a.png`}
      />
      <PageSection
        url={
          "/professionnel/je-suis-un-prepose-d-etablissement/le-financement-des-preposes-d-etablissement"
        }
        title={"Le financement des préposés d'établissement"}
        image={`${publicRuntimeConfig.appUrl}/bg-a.png`}
      />
    </Box>
  </Flex>
);

export default Index;
