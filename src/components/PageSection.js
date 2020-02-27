import { Button, Card, Heading4 } from "@socialgouv/emjpm-ui-core";
import NextLink from "next/link";
import React from "react";
import { Box, Link } from "rebass";

const PageSection = ({ url, title, image }) => (
  <Card
    sx={{
      height: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      px: 4,
      py: 6,
      mb: 4,
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      borderRadius: 3,
      color: "white",
      backgroundColor: "black"
    }}
  >
    <Box textAlign="center">
      <Heading4 mb={4}>
        {title}
      </Heading4>
      <NextLink href="/[...page]" as={url} passHref>
        <Button as={Link}>En savoir plus</Button>
      </NextLink>
    </Box>
  </Card>
);

export default PageSection;
