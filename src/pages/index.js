import getConfig from "next/config";
import React from "react";
import { Box, Flex, Heading } from "rebass";

import LandingLink from "../components/LandingLink";

const { publicRuntimeConfig } = getConfig();

const pageWrapperStyle = {
  fontFamily: "Comfortaa",
  height: "100%",
  maxWidth: 1400,
  mx: "auto",
  textAlign: "center",
};

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
  height: "100%",
  justifyContent: "center",
  position: "relative",
};

const contentStyle = {
  color: "white",
  maxWidth: 1200,
  mx: "auto",
  position: "relative",
  textAlign: "center",
  width: "100%",
};

const linksStyle = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-evenly",
  width: "100%",
};

const headingStyle = {
  fontFamily: "Comfortaa",
  fontSize: [6, 7],
  maxWidth: 800,
  mb: [6, 6, 120],
  mx: "auto",
  p: [3, 4, 0],
  textAlign: "center",
};

const Index = () => {
  return (
    <Box sx={pageWrapperStyle}>
      <Flex sx={containerStyle}>
        <Box style={contentStyle}>
          <Heading sx={headingStyle}>
            Bienvenue sur le portail de la Protection Juridique des Majeurs
          </Heading>
          <Box sx={linksStyle}>
            <LandingLink
              href="/"
              text="Je suis un particulier"
              subtext="(en construction)"
              disabled
            />
            <LandingLink href="/professionnel" text="Je suis un professionnel" />
            <LandingLink
              href="/devenir-professionnel"
              text={
                <>
                  Je veux devenir <br /> professionnel
                </>
              }
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
