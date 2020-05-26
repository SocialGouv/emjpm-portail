import getConfig from "next/config";
import React from "react";

import { PreposeObligationsControles, PreposeObligationsPrestationSerment } from "../content";

const { publicRuntimeConfig } = getConfig();

const mainHeadingText = `Bienvenue sur le portail de la Protection Juridique des Majeurs`;

export const preposeEtablissementIndexPageData = {
  heading: mainHeadingText,
  sections: [
    {
      image: `${publicRuntimeConfig.appUrl}/bg-c.png`,
      title: `Obligations administratives \n du preposé`,
      url: `/professionnel/je-suis-un-prepose-d-etablissement/obligations-administratives-du-prepose`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-c.png`,
      title: `Les droits du protégé`,
      url: "/professionnel/je-suis-un-prepose-d-etablissement/les-droits-du-protege",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-c.png`,
      title: `L'évolution de l'activité \n du préposé`,
      url: `/professionnel/je-suis-un-prepose-d-etablissement/l-evolution-de-l-activite-du-prepose`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-c.png`,
      title: `La déclaration d'activité`,
      url: `/professionnel/je-suis-un-prepose-d-etablissement/la-declaration-d-activite`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-c.png`,
      title: `Le système de financement des \n mesures`,
      url:
        "/professionnel/je-suis-un-prepose-d-etablissement/le-systeme-de-financement-des-mesures",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-c.png`,
      title: `Le système de participation \n et la grille de coût`,
      url: `/professionnel/je-suis-un-prepose-d-etablissement/le-systeme-de-participation-et-la-grille-de-cout`,
    },
  ],
};

export const preposeEtablissementObligationsPreposePageData = {
  heading: `Obligations administratives du préposé`,
  sections: [
    {
      _id: 0,
      content: <PreposeObligationsPrestationSerment />,
      title: `Prestation de serment`,
    },
    {
      _id: 1,
      content: <PreposeObligationsControles />,
      title: `Contrôles`,
    },
  ],
};
