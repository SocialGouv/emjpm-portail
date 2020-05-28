import React from "react";
import { Flex } from "rebass";

const PageSectionsWrapper = ({ children }) => {
  return (
    <Flex flexWrap="wrap" maxWidth={1400} mx="auto" justifyContent="center">
      {children}
    </Flex>
  );
};

export default PageSectionsWrapper;
