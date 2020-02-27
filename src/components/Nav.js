import React, { useState } from "react";
import { Box, Flex } from "rebass";

import NavLink from "./NavLink";

const Nav = () => {
  const [active, setActive] = useState(null);

  return (
    <Box maxWidth={1200} maxHeight={1000} mx="auto" mb={4} onMouseLeave={() => setActive(null)}>
      <Flex mb={4}>
        <Box
          sx={{
            color: "black",
            cursor: "pointer",
            borderBottom: "2px solid",
            borderColor: active === 1 ? "primary" : "white",
            width: 220,
            mr: 4,
            pb: 2,
            textDecoration: "none"
          }}
          onMouseEnter={() => setActive(1)}
        >
          Je suis un mandataire individuel
        </Box>
        <Box
          sx={{
            color: "black",
            cursor: "pointer",
            borderBottom: "2px solid",
            borderColor: active === 2 ? "primary" : "white",
            width: 220,
            mr: 4,
            pb: 2,
            textDecoration: "none"
          }}
          onMouseEnter={() => setActive(2)}
        >
          Je suis un service de mandataire
        </Box>
        <Box
          sx={{
            color: "black",
            cursor: "pointer",
            borderBottom: "2px solid",
            borderColor: active === 3 ? "primary" : "white",
            width: 220,
            mr: 4,
            pb: 2,
            textDecoration: "none"
          }}
          onMouseEnter={() => setActive(3)}
        >
          {`Je suis un mandataire préposé d'établissement`}
        </Box>
      </Flex>
      {active === 1 && (
        <Flex>
          <NavLink
            href="/individuel/les-obligations-a-l-issue-de-la-notification"
            text="Les obligations à l'issue de la notification"
          />
          <NavLink
            href="/individuel/les-obligations-en-tant-que-mandataire-individuel"
            text="Les obligations en tant que mandataire individuel"
          />
          <NavLink
            href="/individuel/le-financement-des-mandataires-individuels"
            text="Le financement des mandataires individuels"
          />
        </Flex>
      )}
      {active === 2 && (
        <Flex>
          <NavLink
            href="/service/les-obligations-a-l-issue-de-la-notification"
            text="Les obligations à l'issue de la notification"
          />
          <NavLink
            href="/service/les-obligations-en-tant-que-service-de-mandataire"
            text="Les obligations en tant que service de mandataire"
          />
          <NavLink
            href="/service/le-financement-des-services-de-mandataires"
            text="Le financement des services de mandataires"
          />
        </Flex>
      )}
      {active === 3 && (
        <Flex>
          <NavLink
            href="/prepose/la-declaration-des-preposes-d-etablissement"
            text="La déclaration des préposés d'établissement"
          />
          <NavLink
            href="/prepose/les-obligations-en-tant-que-prepose-d-etablissement"
            text="Les obligations en tant que préposé d'établissement"
          />
          <NavLink
            href="/prepose/le-financement-des-preposes-d-etablissement"
            text="Le financement des préposés d'établissement"
          />
        </Flex>
      )}
    </Box>
  );
};

export default Nav;
