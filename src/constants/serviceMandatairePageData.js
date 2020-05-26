import getConfig from "next/config";
import React from "react";

import {
  ServiceObligationsAdminDelegueControles,
  ServiceObligationsAdminDeleguePrestationSerment,
} from "../content";

const { publicRuntimeConfig } = getConfig();

const mainHeadingText = `Bienvenue sur le portail de la Protection Juridique des Majeurs`;

export const serviceMandataireIndexPageData = {
  heading: mainHeadingText,
  sections: [
    {
      image: `${publicRuntimeConfig.appUrl}/bg-b.png`,
      title: `Obligations administratives \n du delegué de service`,
      url: `/professionnel/je-suis-un-service-mandataire/obligations-administratives-du-delegue-de-service`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-b.png`,
      title: `Les droits du protégé`,
      url: "/professionnel/je-suis-un-service-mandataire/les-droits-du-protege",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-b.png`,
      title: `La déclaration d'activité`,
      url: `/professionnel/je-suis-un-service-mandataire/la-declaration-d-activite`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-b.png`,
      title: `Le système de financement des \n mesures`,
      url: "/professionnel/je-suis-un-service-mandataire/le-systeme-de-financement-des-mesures",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-b.png`,
      title: `Le système de participation \n et la grille de coût`,
      url: `/professionnel/je-suis-un-service-mandataire/le-systeme-de-participation-et-la-grille-de-cout`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-b.png`,
      title: `L'évolution de la capacité du \n service mandataire`,
      url: `/professionnel/je-suis-un-service-mandataire/l-evolution-de-la-capacite-du-service-mandataire`,
    },
  ],
};

export const serviceMandataireObligationsAdminDelegueServicePageData = {
  heading: `Obligations administratives du délégué de service`,
  sections: [
    {
      _id: 0,
      content: <ServiceObligationsAdminDeleguePrestationSerment />,
      title: `Prestation de serment`,
    },
    {
      _id: 1,
      content: <ServiceObligationsAdminDelegueControles />,
      title: `Contrôles`,
    },
  ],
};
