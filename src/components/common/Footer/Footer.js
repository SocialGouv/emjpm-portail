import React from "react";
import { Box, Flex } from "rebass";

import Logo from "../Logo";

const Footer = ({ landing }) => (
  <Box
    maxWidth={1400}
    mx="auto"
    mt={landing ? 0 : "30px"}
    py={4}
    px={4}
    minHeight="20vh"
    backgroundColor="white"
  >
    <Flex flexWrap="wrap" justifyContent="space-between">
      <Box mb={[3, 0]} flexBasis={["100%", "13%"]}>
        <Logo hasTitle={false} />
      </Box>
    </Flex>
  </Box>
);

export default Footer;
