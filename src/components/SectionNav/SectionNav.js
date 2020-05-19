import React from "react";
import { Box, Flex } from "rebass";

import MenuLink from "./MenuLink";
import { SectionNavItem } from "./style";

const SectionNav = ({ navItems }) => {
  return (
    <Flex maxWidth={1200} pl={100} backgroundColor="white">
      <Flex flexWrap="wrap" maxWidth={1200} maxHeight={1000} backgroundColor="white">
        {navItems &&
          navItems.map((element, index) => {
            return (
              <Box key={index} sx={SectionNavItem}>
                <MenuLink href={element.url}>
                  <Box sx={{ whiteSpace: "pre-line" }}>{element.title}</Box>
                </MenuLink>
              </Box>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default SectionNav;
