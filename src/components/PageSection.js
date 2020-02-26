import { Card } from "@socialgouv/emjpm-ui-core";
import NextLink from "next/link";
import React from "react";
import { Box, Heading, Link } from "rebass";

const PageSection = ({ url, title }) => (
  <NextLink href="/[...page]" as={url} passHref>
    <Link sx={{ textDecoration: "none" }}>
      <Card
        sx={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          py: 6,
          mb: 4,
          backgroundImage: "url(https://source.unsplash.com/random/1024x768?sky)",
          backgroundSize: "cover",
          borderRadius: 3,
          color: "white"
        }}
      >
        <Box>
          <Heading textAlign="center" fontSize={[5, 6]}>
            {title}
          </Heading>
        </Box>
      </Card>
    </Link>
  </NextLink>
);

export default PageSection;
