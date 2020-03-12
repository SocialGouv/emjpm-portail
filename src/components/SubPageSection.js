import { Card, Heading4 } from "@socialgouv/emjpm-ui-core";
import React from "react";
import { Box } from "rebass";

const SubPageSection = ({ children, title }) => (
  <Card bg="white" py={4} px={6} mb={6} borderRadius={3} fontSize={1}>
    <Heading4 fontWeight="normal" mb={4} textAlign="center">
      {title}
    </Heading4>
    <Box maxWidth={1000} mx="auto">
      <Box fontWeight="normal" color="textSecondary">
        {children}
      </Box>
    </Box>
  </Card>
);

export default SubPageSection;
