import Head from "next/head";
import { Card, Heading3, Heading4, Text } from "@socialgouv/emjpm-ui-core";
import { Box, Flex, Heading, Link } from "rebass";
import NextLink from "next/link";
import { useRouter } from "next/router";

import subNavLinks from "../constants/subNavLinks";
import SubNav from "./SubNav";
import SubPageSection from "./SubPageSection";
import PageSection from "../components/PageSection";

const Page = ({ title, url, sections, subPages }) => (
  <Box>
    <Head>
      <title>eMJPM Portail - {title}</title>
    </Head>
    <SubNav items={subPages} />
    <Box bg="whiteGray" p={4}>
      <Box maxWidth={1200} mx="auto" mb={4}>
        <Heading4 mb={4}>{title}</Heading4>
        {(sections && sections.length) ? (
          sections.map(section => (
            <SubPageSection key={`${title}/${section.title}`} {...section} />
          ))
        ) : (
          subPages.map(page => (
            <PageSection key={`${title}/${page.title}`} {...page} />
          ))
        )}
      </Box>
    </Box>
  </Box>
);

export default Page;
