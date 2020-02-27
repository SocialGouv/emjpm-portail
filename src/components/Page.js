import { Heading4 } from "@socialgouv/emjpm-ui-core";
import Head from "next/head";
import React from "react";
import { Box } from "rebass";

import Breadcrumbs from "./Breadcrumbs";
import SubPageSection from "./SubPageSection";

const Page = ({ title, sections, parentPage }) => (
  <Box>
    <Head>
      <title>eMJPM Portail - {title}</title>
    </Head>
    <Box bg="whiteGray" px={4} py={6}>
      <Box maxWidth={1200} mx="auto" mb={4}>
        <Breadcrumbs parentTitle={parentPage.title} title={title} />
        {sections && sections.length && (
          <Box>
            <Heading4 fontWeight="normal" mb={6}>
              {title}
            </Heading4>
            {sections.map(section => (
              <SubPageSection key={`${title}/${section.title}`} {...section} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  </Box>
);

export default Page;
