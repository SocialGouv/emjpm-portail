import React from "react";
import { Flex } from "rebass";

import NavLink from "./NavLink";

const SubNav = ({ items }) => (
  <Flex maxWidth={1200} mx="auto" mb={4}>
    {items.map((item) => (
      <NavLink key={item.url} href={item.url} text={item.title} />
    ))}
  </Flex>
);

export default SubNav;
