import { Button } from "@socialgouv/emjpm-ui-core";
import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Box, Flex, Heading, Link } from "rebass";

const { publicRuntimeConfig } = getConfig();

const links = [
  { href: "/", text: "Je suis un particulier" },
  { href: "/professionnel", text: "Je suis un professionnel" },
  { href: "/devenir-professionnel", text: "Je veux devenir un professionnel" }
];

const Index = () => (
  <Flex
    sx={{
      alignItems: "center",
      backgroundImage: `url("${publicRuntimeConfig.appUrl}/bg-index.jpg")`,
      backgroundSize: "cover",
      height: "100vh",
      justifyContent: "center",
      maxHeight: 700,
      width: "100%"
    }}
  >
    <Box maxWidth={1200} mx="auto" color="white" textAlign="center">
      <Heading fontSize={5} mb={[6, 6, 120]} mx={4} textAlign="center">
        Bienvenue sur le portail
        <br />
        de la Protection Juridique des Majeurs
      </Heading>
      {links.map(link => (
        <NextLink key={link.href} href="/[...page]" as={link.href} passHref>
          <Button
            as={Link}
            sx={{
              mb: 4,
              mr: 6,
              px: 6,
              py: 4
            }}
          >
            {link.text}
          </Button>
        </NextLink>
      ))}
    </Box>
  </Flex>
);

export default Index;
