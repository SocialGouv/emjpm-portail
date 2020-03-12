import React from "react";
import { Box } from "rebass";

const linkStyle = {
  color: "primary",
  textDecoration: "none"
};

const ExternalFormLink = ({ children }) => (
  <Box my={4}>
    <Box fontWeight="bold">{`Pour accéder au formulaire, cliquez ici : `}</Box>
    <Box as="a" href={children} sx={linkStyle} target="_blank">
      {children}
    </Box>
  </Box>
);

export default ExternalFormLink;
