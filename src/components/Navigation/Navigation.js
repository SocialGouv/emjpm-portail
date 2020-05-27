import getConfig from "next/config";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Box, Flex } from "rebass";

import { LinkStyle, navigationStyle } from "./style";

const { appUrl } = getConfig().publicRuntimeConfig;

const Navigation = ({ navItems }) => {
  const router = useRouter();
  return (
    <Flex sx={navigationStyle}>
      {navItems &&
        navItems.map((element, index) => (
          <NextLink key={index} href={`${element.url}`} as={`${appUrl}${element.url}`} passHref>
            <Box
              sx={{
                ...LinkStyle,
                borderColor: element.url === router.pathname ? "primary" : "white",
                color: element.url === router.pathname && "primary",
              }}
              as="a"
            >
              {element.title}
            </Box>
          </NextLink>
        ))}
    </Flex>
  );
};

export default Navigation;
