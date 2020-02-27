import { Heading4 } from "@socialgouv/emjpm-ui-core";
import Head from "next/head";
import React from "react";
import { Box } from "rebass";

import PageSection from "../components/PageSection";
import SubNav from "./SubNav";
import SubPageSection from "./SubPageSection";

const Page = ({ title, sections, subPages }) => (
  <Box>
    <Head>
      <title>eMJPM Portail - {title}</title>
    </Head>
    <Box bg="whiteGray" p={4}>
      <Box maxWidth={1200} mx="auto" mb={4}>
        {sections && sections.length ? (
          <Box>
            <Heading4 fontWeight="normal" mb={4}>{title}</Heading4>
            {sections.map(section => (
              <SubPageSection key={`${title}/${section.title}`} {...section} />
            ))}
          </Box>
        ) : (
          <Box>
            <Heading4 fontWeight="normal" textAlign="center" my={6}>
              Bienvenue sur le site de la protection juridique des majeurs
            </Heading4>
            <PageSection image="/bg-a.png" title="Je suis un mandataire individuel" url="/individuel" />
            <PageSection image="/bg-b.png" title="Je suis un service de mandataire" url="/service" />
            <PageSection
              image="/bg-c.png"
              title="Je suis un mandataire préposé d'établissement"
              url="/prepose"
            />
          </Box>
        )}
      </Box>
    </Box>
  </Box>
);

export default Page;
