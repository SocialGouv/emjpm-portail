import NextLink from "next/link";
import React from "react";
import { Box, Flex } from "rebass";

import { LinkStyle } from "./style";

const Navigation = ({ navItems }) => {
  return (
    <Flex pl={100} flexWrap="wrap" maxWidth={1200} maxHeight={1000} backgroundColor="white">
      {navItems &&
        navItems.map((element, index) => {
          return (
            <Box key={index} sx={LinkStyle}>
              <NextLink href={`${element.url}`}>
                <a>{element.title}</a>
              </NextLink>
            </Box>
          );
        })}
    </Flex>
  );
};

export default Navigation;
