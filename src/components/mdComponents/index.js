import React from "react";
import { Box, Flex, Image } from "rebass";

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
      my: "18px",
      ":last-of-type": {
        mb: 0,
      },
    }}
  >
    {children}
  </Box>
);

const ListItem = ({ children }) => (
  <Box
    sx={{
      mb: "10px",
    }}
  >
    <Flex flexDirection="row" alignItems="middle">
      <Box
        sx={{
          mt: "1px",
          mr: "3px",
          minWidth: "5px",
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
      fontWeight: "bold",
    }}
  >
    {children}
  </Box>
);

const Spacer = ({ children }) => (
  <Box
    sx={{
      mb: "18px",
      ":last-of-type": {
        mb: 0,
      },
    }}
  >
    {children}
  </Box>
);

const MdImage = ({ src, alt }) => (
  <Image
    sx={{
      display: "block",
      maxWidth: "800px",
      mx: "auto",
      my: "20px",
      "@media screen and (max-width: 950px)": {
        width: "100%",
      },
    }}
    src={src}
    alt={alt}
  />
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
  img: function ImageWrapper(props) {
    return <MdImage src={props.src} alt={props.alt} />;
  },
};
