import React, { useState } from "react";
import { Box, Flex } from "rebass";

import MenuLink from "./MenuLink";

const SectionNav = ({ navItems }) => {
  const [active, setActive] = useState(null);

  return (
    <Flex maxWidth={1200} pl={100} backgroundColor="white">
      <Flex
        flexWrap="wrap"
        maxWidth={1200}
        maxHeight={1000}
        backgroundColor="white"
        onMouseLeave={() => setActive(null)}
      >
        {navItems &&
          navItems.map((element, index) => {
            return (
              <Box
                key={index}
                sx={{
                  color: active === index ? "primary" : "black",
                  cursor: "pointer",
                  borderBottom: "2px solid",
                  borderColor: active === index ? "primary" : "white",
                  mr: "30px",
                  py: 1,
                  textDecoration: "none",
                }}
                onMouseEnter={() => setActive(index)}
              >
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
