import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Box, Flex, Link } from "rebass";

import Logo from "../components/Logo";

const { appUrl } = getConfig().publicRuntimeConfig;

const Header = () => (
  <Box maxWidth={1200} mx="auto" py={4} px={4} backgroundColor="white">
    <Flex alignItems="center" flexWrap="wrap" justifyContent="space-between">
      <NextLink href={"/"} as={appUrl} passHref>
        <Link color="inherit">
          <Logo title="emjpm.pjm.fr - Protection Juridique des Majeurs" />
        </Link>
      </NextLink>
    </Flex>
  </Box>
);

export default Header;
