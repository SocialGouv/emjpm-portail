import React from "react";
import { Box, Flex } from "rebass";
import NextLink from "next/link";
import { LinkStyle } from "./style";

const SectionNav = ({ navItems }) => {
  return (
    <Flex maxWidth={1200} pl={100} backgroundColor="white">
      <Flex flexWrap="wrap" maxWidth={1200} maxHeight={1000} backgroundColor="white">
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
    </Flex>
  );
};

export default SectionNav;
