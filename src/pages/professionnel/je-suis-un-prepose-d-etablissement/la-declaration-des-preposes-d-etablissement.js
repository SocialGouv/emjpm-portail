import React from "react";
import { Box, Flex, Heading } from "rebass";

import Breadcrumbs from "../../../components/Breadcrumbs";
import SubPageSection from "../../../components/SubPageSection";

const Index = () => (
  <Flex bg="whiteGray">
    <Box width="100%" maxWidth={1200} mx="auto">
      <Breadcrumbs
        index="/professionnel"
        parentTitle="Je suis un préposé d'établissement"
        parentUrl="/professionnel/je-suis-un-prepose-d-etablissement"
        title="La déclaration des préposés d'établissement"
      />
      <Heading fontWeight="normal" mb={6} fontSize={4}>
        {`La déclaration des préposés d'établissement`}
      </Heading>
      <SubPageSection title="L'évolition de l'activité des mandataires individuels de l'établissement">
        In interdum sodales nisl id commodo. Nulla pretium ipsum et turpis efficitur, ut rutrum
        dolor rutrum. Morbi ultrices dignissim purus, in tincidunt enim facilisis nec. Vivamus et
        nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio lectus. Maecenas sit amet
        augue varius, facilisis erat sit amet, convallis tellus. Proin vel tristique nisl.
      </SubPageSection>
      <SubPageSection title="Les obligations administratives du délégué de service">
        In interdum sodales nisl id commodo. Nulla pretium ipsum et turpis efficitur, ut rutrum
        dolor rutrum. Morbi ultrices dignissim purus, in tincidunt enim facilisis nec. Vivamus et
        nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio lectus. Maecenas sit amet
        augue varius, facilisis erat sit amet, convallis tellus. Proin vel tristique nisl.
      </SubPageSection>
    </Box>
  </Flex>
);

export default Index;
