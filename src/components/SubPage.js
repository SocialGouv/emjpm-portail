import Head from "next/head";
import Link from "next/link";
import { Card, Heading3, Heading4, Text } from "@socialgouv/emjpm-ui-core";
import { Box, Flex, Heading } from "rebass";

import subNavLinks from "../../constants/subNavLinks";
import SubNav from "../../components/SubNav";

const SubPage = ({ type, title, heading,  }) => (
  <Box>
    <Head>
      <title>eMJPM Portail - {title}</title>
    </Head>

    <SubNav items={subNavLinks[type]}/>

    <Box minHeight={500} p={4}>
      <Heading3 mb={4}>{heading}</Heading3>
      {sections.map(section => (
        <SubPageSection key={section.title} title={section.title} text={section.text} />
      ))}
    </Box>
  </Box>
);

export default SubPage;
