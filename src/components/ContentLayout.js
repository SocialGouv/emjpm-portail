import React from "react";
import { Box } from "rebass";

const ContentLayout = ({ children }) => {
  return (
    <Box
      sx={{
        fontSize: "14px",
        fontFamily: "Quicksand",
      }}
    >
      {children}
    </Box>
  );
};

export default ContentLayout;
