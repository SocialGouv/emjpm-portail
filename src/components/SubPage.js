import { Heading3 } from "@socialgouv/emjpm-ui-core";
import Head from "next/head";
import React from "react";
import { Box } from "rebass";

import subNavLinks from "../constants/subNavLinks";
import SubNav from "./SubNav";
import SubPageSection from "./SubPageSection";

const SubPage = ({ type, title, heading, sections }) => (
  <Box>
    <Head>
      <title>eMJPM Portail - {title}</title>
    </Head>

    <SubNav items={subNavLinks[type]} />

    <Box minHeight={500} p={4}>
      <Heading3 fontWeight="normal" mb={4}>{heading}</Heading3>
      {sections.map(section => (
        <SubPageSection key={section.title} title={section.title} text={section.text} />
      ))}
    </Box>
  </Box>
);

export default SubPage;
