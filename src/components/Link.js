import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Link as RebassLink } from "rebass";

const { appUrl } = getConfig().publicRuntimeConfig;

const Link = ({ text, href, sx }) => (
  <NextLink href={href} as={`${appUrl}${href}`} passHref>
    <RebassLink
      sx={{
        bg: "primary",
        borderRadius: 4,
        color: "white",
        display: "inline-block",
        mb: 4,
        mr: 6,
        px: 6,
        py: 4,
        ...sx
      }}
    >
      {text}
    </RebassLink>
  </NextLink>
);

export default Link;
