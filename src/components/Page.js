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
    <SubNav items={subPages} />
    <Box bg="whiteGray" p={4}>
      <Box maxWidth={1200} mx="auto" mb={4}>
        <Heading4 mb={4}>{title}</Heading4>
        {sections && sections.length
          ? sections.map(section => (
              <SubPageSection key={`${title}/${section.title}`} {...section} />
            ))
          : subPages.map(page => <PageSection key={`${title}/${page.title}`} {...page} />)}
      </Box>
    </Box>
  </Box>
);

export default Page;
