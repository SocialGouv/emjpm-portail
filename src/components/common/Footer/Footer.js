import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Box, Flex, Link, Text } from "rebass";

import Logo from "../Logo";
import { footerItemStyle, listStyle, listTitleStyle } from "./style";

const { appUrl } = getConfig().publicRuntimeConfig;

const List = (props) => <Box {...props} sx={listStyle} />;

const ListItem = (props) => <Text {...props} sx={listStyle} />;

const ListTitle = (props) => <Text {...props} sx={listTitleStyle} />;

const Footer = ({ landing }) => (
  <Box
    maxWidth={1400}
    mx="auto"
    mt={landing ? 0 : "30px"}
    py={4}
    px={4}
    minHeight="20vh"
    backgroundColor="white"
  >
    <Flex flexWrap="wrap" justifyContent="space-between">
      <Box mb={[3, 0]} flexBasis={["100%", "13%"]}>
        <Logo hasTitle={false} />
      </Box>
      <Flex flexBasis={["100%", "87%"]} justifyContent="space-evenly">
        <List sx={footerItemStyle}>
          <ListTitle>A propos</ListTitle>
          <ListItem>
            <NextLink href={`/mentions-legales`} as={`${appUrl}/mentions-legales`} passHref>
              <Link>Mentions légales</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink
              href={`/politique-de-confidentialite`}
              as={`${appUrl}/politique-de-confidentialite`}
              passHref
            >
              <Link>Politique de confidentialité</Link>
            </NextLink>
          </ListItem>
        </List>
        <List sx={footerItemStyle}>
          <ListTitle>Contactez-nous</ListTitle>
          <ListItem>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:support.emjpm@fabrique.social.gouv.fr?subject=Demande%20d%27%C3%A9volution"
            >
              Par email
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  </Box>
);

export default Footer;
