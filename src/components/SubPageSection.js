import { Card, Heading4 } from "@socialgouv/emjpm-ui-core";
import React from "react";
import { Box, Link } from "rebass";

const SubPageSection = ({ title, text, link }) => (
  <Card bg="white" py={4} px={6} mb={4} borderRadius={3} fontSize={1}>
    <Heading4 fontWeight="normal" mb={4} textAlign="center">
      {title}
    </Heading4>
    <Box maxWidth={1000} mx="auto">
      <Box fontWeight="normal" color="textSecondary">
        {text}
      </Box>
      {link && (
        <Box mt={2}>
          {link.text}{" "}
          <Box
            as={Link}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{ textDecoration: "none" }}
          >
            {link.url}
          </Box>
        </Box>
      )}
    </Box>
  </Card>
);

export default SubPageSection;
