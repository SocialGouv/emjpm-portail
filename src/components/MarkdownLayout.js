import React from "react";
import { Box } from "rebass";

const MarkdownLayout = ({ children }) => {
  return (
    <Box
      sx={{
        fontSize: "14px",
        fontFamily: "Quicksand",
        pt: "15px",
        pb: "22px",
        px: "85px",
      }}
    >
      {children}
    </Box>
  );
};

export default MarkdownLayout;
