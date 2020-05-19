import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Box } from "rebass";

const { appUrl } = getConfig().publicRuntimeConfig;

const linkStyle = {
  color: "textPrimary",
  textAlign: "left",
  fontSize: "14px",
  fontWeight: "bold",
  mx: "1",
};

const MenuLink = ({ children, href }) => (
  <NextLink as={`${appUrl}${href}`} href={href} passHref>
    <Box
      sx={{
        ...linkStyle,
      }}
    >
      {children}
    </Box>
  </NextLink>
);

export default MenuLink;
