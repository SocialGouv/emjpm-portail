import getConfig from "next/config";
import React from "react";
import { Box, Flex, Heading } from "rebass";

import Link from "../components/Link";

const { publicRuntimeConfig } = getConfig();

const containerStyle = {
  ":before": {
    backgroundImage: `url("${publicRuntimeConfig.appUrl}/bg-index.jpg")`,
    backgroundSize: "cover",
    content: '""',
    height: "100%",
    left: 0,
    opacity: "0.4",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  alignItems: "center",
  backgroundColor: "black",
  height: "80%",
  justifyContent: "center",
  position: "relative",
};

const style = {
  color: "white",
  maxWidth: 1200,
  mx: "auto",
  position: "relative",
  textAlign: "center",
};

const Index = () => (
  <Flex sx={containerStyle}>
    <Box style={style}>
      <Heading fontSize={5} mb={[6, 6, 120]} mx={4} textAlign="center">
        Bienvenue sur le portail
        <br />
        de la Protection Juridique des Majeurs
      </Heading>
      <Link href="/" text="Je suis un particulier" />
      <Link href="/professionnel" text="Je suis un professionnel" />
      <Link href="/devenir-professionnel" text="Je veux devenir un professionnel" />
    </Box>
  </Flex>
);

export default Index;
