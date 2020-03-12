import React from "react";
import { Box, Flex, Heading } from "rebass";

import Breadcrumbs from "../../../components/Breadcrumbs";
import ExternalFormLink from "../../../components/ExternalFormLink";
import SubPageSection from "../../../components/SubPageSection";

const Index = () => (
  <Flex bg="whiteGray">
    <Box width="100%" maxWidth={1200} mx="auto">
      <Breadcrumbs
        index="/devenir-professionnel"
        parentTitle="L'agrément des mandataires judiciaires"
        parentUrl="/devenir-professionnel/l-agrement-des-mandataires-judiciaires"
        title="L'autorisation des services mandataires à la protection juridique des majeurs"
      />
      <Heading fontWeight="normal" mb={6} fontSize={4}>
        {`L'agrément des mandataires exercant à titre individuel`}
      </Heading>
      <SubPageSection title="Le financement des mandataires individuels">
        In interdum sodales nisl id commodo. Nulla pretium ipsum et turpis efficitur, ut rutrum
        dolor rutrum. Morbi ultrices dignissim purus, in tincidunt enim facilisis nec. Vivamus et
        nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio lectus. Maecenas sit amet
        augue varius, facilisis erat sit amet, convallis tellus. Proin vel tristique nisl.
      </SubPageSection>
      <SubPageSection title="Le système de financement des mesures">
        In interdum sodales nisl id commodo. Nulla pretium ipsum et turpis efficitur, ut rutrum
        dolor rutrum. Morbi ultrices dignissim purus, in tincidunt enim facilisis nec. Vivamus et
        nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio lectus. Maecenas sit amet
        augue varius, facilisis erat sit amet, convallis tellus. Proin vel tristique nisl.
      </SubPageSection>
      <SubPageSection title="La grille des coûts des mesures de protection">
        In interdum sodales nisl id commodo. Nulla pretium ipsum et turpis efficitur, ut rutrum
        dolor rutrum. Morbi ultrices dignissim purus, in tincidunt enim facilisis nec. Vivamus et
        nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio lectus. Maecenas sit amet
        augue varius, facilisis erat sit amet, convallis tellus. Proin vel tristique nisl.
        <ExternalFormLink>
          https://www.formulaires.service-public.fr/gf/getNotice.do?cerfaNotice=51367&certFormulaire=13913
        </ExternalFormLink>
      </SubPageSection>
    </Box>
  </Flex>
);

export default Index;
