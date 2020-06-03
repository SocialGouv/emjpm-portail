import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Box, Link as RebassLink } from "rebass";

import { disabledLinkStyle, landingLinkStyle } from "./style";

const { appUrl } = getConfig().publicRuntimeConfig;

const LandingLink = ({ text, href, sx, disabled, subtext }) => (
  <NextLink href={href} as={`${appUrl}${href}`} passHref>
    <RebassLink
      sx={
        disabled
          ? disabledLinkStyle
          : {
              ...landingLinkStyle,
              ...sx,
            }
      }
    >
      <Box>
        {text}
        <Box sx={{ fontSize: "12px", pt: "2px" }}>{subtext}</Box>
      </Box>
    </RebassLink>
  </NextLink>
);

export default LandingLink;
