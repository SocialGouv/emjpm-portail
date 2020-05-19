import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Box } from "rebass";

import { MenuLinkStyle } from "./style";

const { appUrl } = getConfig().publicRuntimeConfig;

const MenuLink = ({ children, href }) => (
  <NextLink as={`${appUrl}${href}`} href={href} passHref>
    <Box sx={MenuLinkStyle}>{children}</Box>
  </NextLink>
);

export default MenuLink;
