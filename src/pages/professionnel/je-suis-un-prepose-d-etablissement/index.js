import React from "react";
import { Box, Flex, Heading } from "rebass";

import Navigation from "../../../components/Navigation";
import PageSection from "../../../components/PageSection";
import { preposeEtablissementIndexPageData as data } from "../../../constants/preposeEtablissementPageData";

const Index = () => (
  <>
    {data.sections && <Navigation navItems={data.sections} />}
    <Flex bg="whiteGray">
      <Box width="100%" maxWidth={1200} mx="auto" textAlign="center">
        <Heading fontWeight="normal" fontSize={4} my={6} mx={4} textAlign="center">
          {data.heading}
        </Heading>
        {data.sections &&
          data.sections.map((item, index) => (
            <PageSection key={index} url={item.url} title={item.title} image={item.image} />
          ))}
      </Box>
    </Flex>
  </>
);

export default Index;
