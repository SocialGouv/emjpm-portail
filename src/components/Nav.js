import { Flex } from "rebass";

import NavLink from "./NavLink";

const Nav = () => (
  <Flex maxWidth={1200} mx="auto" mb={4}>
    <NavLink href="/individuel" text="Je suis un mandataire individuel" />
    <NavLink href="/service" text="Je suis un service de mandataire" />
    <NavLink href="/prepose" text="Je suis un mandataire préposé d'établissement" />
  </Flex>
);

export default Nav;
