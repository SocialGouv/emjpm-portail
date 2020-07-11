import React from "react";
import { Box } from "rebass";

const linkStyle = {
  color: "primary",
  textDecoration: "underline",
};

const ExternalLink = ({ children, href }) => (
  <Box
    as="a"
    my={4}
    display="inline"
    href={href}
    sx={linkStyle}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Box>
);

export default ExternalLink;
