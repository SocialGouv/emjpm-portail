import { Card, Heading4, Text } from "@socialgouv/emjpm-ui-core";
import React from "react";
import { Box } from "rebass";

const SubPageSection = ({ title, text, link }) => (
  <Card
    bg="white"
    py={4}
    px={6}
    mb={4}
    sx={{
      borderRadius: 3,
      textAlign: "center"
    }}
  >
    <Heading4 mb={2}>{title}</Heading4>
    <Box width={[1, 1, 8 / 10]} mx="auto">
      <Text>{text}</Text>
      {link && (
        <Box mt={2}>
          {link.text}{" "}
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.url}
          </a>
        </Box>
      )}
    </Box>
  </Card>
);

export default SubPageSection;
