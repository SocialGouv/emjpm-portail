import React from "react";
import { Box, Flex } from "rebass";

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

const UnorderedList = ({ children }) => (
  <Box
    sx={{
      my: "36px",
      fontSize: "14px",
      ":last-of-type": {
        mb: 0,
      },
    }}
  >
    {children}
  </Box>
);

const ListItem = ({ children }) => (
  <Box sx={{ mb: "10px", fontSize: "14px" }}>
    <Flex flexDirection="row" alignItems="middle">
      <Box
        sx={{
          mt: "2px",
          mr: "3px",
          minWidth: "4px",
          fontSize: "13px",
        }}
      >
        •
      </Box>
      {children}
    </Flex>
  </Box>
);

const Paragraph = ({ children }) => (
  <Box
    sx={{
      fontSize: "14px",
      lineHeight: "1.5",
      mb: "5px",
      ":last-of-type": {
        mb: 0,
      },
    }}
  >
    {children}
  </Box>
);

const Bold = ({ children }) => (
  <Box
    sx={{
      display: "inline",
      fontSize: "13.3px",
      fontWeight: "bold",
    }}
  >
    {children}
  </Box>
);

const Spacer = ({ children }) => (
  <Box
    sx={{
      mb: "36px",
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
  strong: function BoldWrapper(props) {
    return <Bold>{props.children}</Bold>;
  },
  br: function SpacerWrapper(props) {
    return <Spacer>{props.children}</Spacer>;
  },
};
