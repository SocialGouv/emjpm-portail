import getConfig from "next/config";
import React from "react";
import { Box, Flex, Heading } from "rebass";

import Link from "../components/Link";

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
        <Link key={link.href} {...link} />
      ))}
    </Box>
  </Flex>
);

export default Index;
