import NextLink from "next/link";
import React from "react";
import { Link as RebassLink } from "rebass";

const LandingLink = ({ text, href, sx }) => (
  <NextLink href={href} as={`${href}`} passHref>
    <RebassLink
      sx={{
        bg: "white",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "primary",
        border: "solid 1px",
        borderColor: "secondary",
        fontSize: 3,
        width: 300,
        height: 100,
        lineHeight: "1.3",
        ...sx,
      }}
    >
      {text}
    </RebassLink>
  </NextLink>
);

export default LandingLink;
