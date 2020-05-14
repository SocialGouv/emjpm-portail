import { Logo } from "@socialgouv/emjpm-ui-core";
import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Flex, Link } from "rebass";

const { appUrl } = getConfig().publicRuntimeConfig;

const Header = () => (
  <Flex p={1} alignItems="center" flexWrap="wrap" justifyContent="space-between">
    <NextLink href={"/"} as={appUrl} passHref>
      <Link color="inherit">
        <Logo title="emjpm.pjm.fr - Protection Juridique des Majeurs" />
      </Link>
    </NextLink>
  </Flex>
);

export default Header;
