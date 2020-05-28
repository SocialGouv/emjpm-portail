import React from "react";
import { Box, Flex, Heading } from "rebass";

const IndexPageWrapper = ({ children, heading }) => {
  return (
    <Flex bg="whiteGray">
      <Box mx="auto" textAlign="center">
        <Heading fontWeight="normal" fontSize={4} my={6} mx={4} textAlign="center">
          {heading}
        </Heading>
        {children}
      </Box>
    </Flex>
  );
};

export default IndexPageWrapper;
