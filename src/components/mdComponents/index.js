import React from "react";
import { Box } from "rebass";

const Heading = ({ children }) => <div style={{ color: "blue", fontSize: "30px" }}>{children}</div>;

const UnorderedList = ({ children }) => (
  <Box sx={{ my: "50px", lineHeight: "0.8", fontFamily: "Quicksand" }}>{children}</Box>
);

const ListItem = ({ children }) => <div style={{ color: "green" }}>{children}</div>;

const Paragraph = ({ children }) => (
  <Box sx={{ lineHeight: "normal", margin: "50px 0", fontFamily: "Quicksand" }}>{children}</Box>
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
