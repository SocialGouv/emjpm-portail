import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Box, Flex, Link } from "rebass";

import Logo from "./Logo";

const { appUrl } = getConfig().publicRuntimeConfig;

const Header = () => (
  <Box maxWidth={1400} mx="auto" py={4} px={4} minHeight="10vh" backgroundColor="white">
    <Flex alignItems="center" flexWrap="wrap" justifyContent="space-between">
      <NextLink href={"/"} as={appUrl} passHref>
        <Link color="inherit">
          <Logo
            title={
              <span>
                emjpm.<strong>pjm</strong>.fr - <strong>Protection Juridique des Majeurs</strong>
              </span>
            }
          />
        </Link>
      </NextLink>
    </Flex>
  </Box>
);

export default Header;
