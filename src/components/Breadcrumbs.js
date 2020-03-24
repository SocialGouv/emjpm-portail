import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Box, Flex, Link } from "rebass";

const { appUrl } = getConfig().publicRuntimeConfig;

const linkStyle = {
  color: "textSecondary",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    color: "primary",
  },
};

const Breadcrumbs = ({ index, parentTitle, parentUrl, title }) => (
  <Flex alignItems="center" my={4} fontSize={1} color="textSecondary">
    <NextLink href={index} as={`${appUrl}${index}`} passHref>
      <Link sx={linkStyle}>Accueil</Link>
    </NextLink>
    <Box mx={1}>&gt;</Box>
    <NextLink href={parentUrl} as={`${appUrl}${parentUrl}`} passHref>
      <Link sx={linkStyle}>{parentTitle}</Link>
    </NextLink>
    <Box mx={1}>&gt;</Box>
    <Box color="primary">{title}</Box>
  </Flex>
);

Breadcrumbs.defaultProps = {
  index: "/",
};

export default Breadcrumbs;
