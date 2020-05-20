import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Link as RebassLink } from "rebass";

import { landingLinkStyle } from "./style";

const { appUrl } = getConfig().publicRuntimeConfig;

const LandingLink = ({ text, href, sx }) => (
  <NextLink href={href} as={`${appUrl}${href}`} passHref>
    <RebassLink
      sx={{
        ...landingLinkStyle,
        ...sx,
      }}
    >
      {text}
    </RebassLink>
  </NextLink>
);

export default LandingLink;
