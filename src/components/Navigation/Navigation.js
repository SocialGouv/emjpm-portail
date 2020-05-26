import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Box, Flex } from "rebass";

import { LinkStyle } from "./style";

const { appUrl } = getConfig().publicRuntimeConfig;

const Navigation = ({ navItems }) => {
  return (
    <Flex
      pl={100}
      flexWrap="wrap"
      maxWidth={1400}
      maxHeight={1000}
      mx="auto"
      backgroundColor="white"
      fontFamily="Comfortaa"
    >
      {navItems &&
        navItems.map((element, index) => {
          return (
            <Box key={index} sx={LinkStyle}>
              <NextLink href={`${element.url}`} as={`${appUrl}${element.url}`} passHref>
                <a>{element.title}</a>
              </NextLink>
            </Box>
          );
        })}
    </Flex>
  );
};

export default Navigation;
