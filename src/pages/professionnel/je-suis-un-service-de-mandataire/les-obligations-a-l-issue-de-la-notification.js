import React from "react";
import { Box, Flex, Heading } from "rebass";

import Breadcrumbs from "../../../components/Breadcrumbs";
import ExternalFormLink from "../../../components/ExternalFormLink";
import SubPageSection from "../../../components/SubPageSection";

const Index = () => (
  <Flex bg="whiteGray">
    <Box width="100%" maxWidth={1200} mx="auto">
      <Breadcrumbs
        index="/professionnel"
        parentTitle="Je suis un service de mandataire"
        parentUrl="/professionnel/je-suis-un-service-de-mandataire"
        title="Les obligations à l'issue de la notification"
      />
      <Heading fontWeight="normal" mb={6} fontSize={4}>
        {`Les obligations à l'issue de la notification`}
      </Heading>
      <SubPageSection title="L'évolution de la capacité du service mandataire">
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
      <SubPageSection title="Pour aller plus loin">
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
