import React from "react";
import { Box } from "rebass";

const MarkdownLayout = ({ children }) => {
  return (
    <Box
      sx={{
        fontFamily: "Quicksand",
        pt: "15px",
        pb: "22px",
        px: "85px",
        "@media screen and (max-width: 1000px)": {
          px: "10px",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default MarkdownLayout;
