import React from "react";
import { Box } from "rebass";

const linkStyle = {
  color: "primary",
  textDecoration: "underline",
};

const ExternalLink = ({ children }) => (
  <Box my={4} display="inline">
    <Box as="a" href={children} sx={linkStyle} target="_blank">
      {children}
    </Box>
  </Box>
);

export default ExternalLink;
