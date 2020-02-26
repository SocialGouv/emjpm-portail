import Head from "next/head";
import { Card, Heading3, Heading4, Text } from "@socialgouv/emjpm-ui-core";
import { Box, Flex, Heading, Link } from "rebass";
import NextLink from "next/link";
import { useRouter } from "next/router";

import subNavLinks from "../constants/subNavLinks";
import SubNav from "./SubNav";
import SubPageSection from "./SubPageSection";

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
          color: "white",
        }}
      >
        <Box>
          <Heading
            textAlign="center"
            fontSize={[ 5, 6 ]}>
            {title}
          </Heading>
        </Box>
      </Card>
    </Link>
  </NextLink>
);

export default PageSection;
