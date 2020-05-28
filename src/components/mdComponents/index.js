import React from "react";
import { Box } from "rebass";

const Heading = ({ children }) => (
  <Box
    sx={{
      fontFamily: "Comfortaa",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "18px",
      mb: "24px",
      color: "text",
    }}
  >
    {children}
  </Box>
);

const UnorderedList = ({ children }) => <Box sx={{ mb: "50px" }}>{children}</Box>;

const ListItem = ({ children }) => <Box sx={{ marginBottom: "10px" }}>• {children}</Box>;

const Paragraph = ({ children }) => (
  <Box
    sx={{
      lineHeight: "normal",
      mb: "48px",
      ":last-of-type": {
        mb: 0,
      },
    }}
  >
    {children}
  </Box>
);

export const mdComponents = {
  h1: function TestWrapper(props) {
    return <Heading>{props.children}</Heading>;
  },
  ul: function UnorderedListWrapper(props) {
    return <UnorderedList>{props.children}</UnorderedList>;
  },
  li: function ListWrapper(props) {
    return <ListItem>{props.children}</ListItem>;
  },
  p: function ParagraphWrapper(props) {
    return <Paragraph>{props.children}</Paragraph>;
  },
};
