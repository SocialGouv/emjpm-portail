import NextLink from "next/link";
import React from "react";
import { Box, Flex, Link } from "rebass";

import Logo from "./Logo";

const Header = () => (
  <Box maxWidth={1400} mx="auto" py={4} px={4} minHeight="10vh" backgroundColor="white">
    <Flex alignItems="center" flexWrap="wrap" justifyContent="space-between">
      <NextLink href={"/"} passHref>
        <Link color="inherit">
          <Logo title="Portail de la Protection Juridique des Majeurs" />
        </Link>
      </NextLink>
    </Flex>
  </Box>
);

export default Header;
