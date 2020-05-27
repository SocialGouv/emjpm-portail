import getConfig from "next/config";
import React from "react";

import { DevenirMandataireAppelCandidatures, DevenirMandataireAppelProjets } from "../content";

const { publicRuntimeConfig } = getConfig();

const mainHeadingText = `Bienvenue sur le portail de la Protection Juridique des Majeurs`;

export const devenirProfessionnelIndexPageData = {
  heading: mainHeadingText,
  sections: [
    {
      image: `${publicRuntimeConfig.appUrl}/bg-devenir-pro-a.png`,
      title: `Appel à candidatures \n et à projets`,
      url: `/devenir-professionnel/appel-a-candidatures-et-a-projets`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-devenir-pro-b.png`,
      splitTitle: {
        firstLine: `La procédure d'agrément`,
        secondLine: `des mandataires individuels`,
      },
      title: `La procédure d'agrément \n des mandataires individuels`,
      url: `/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-devenir-pro-c.png`,
      splitTitle: {
        firstLine: `La procédure d’autorisation`,
        secondLine: `des services mandataires`,
      },
      title: `La procédure d’autorisation \n des services mandataires`,
      url: `/devenir-professionnel/la-procedure-d-autorisation-des-services-mandataires`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-devenir-pro-a.png`,
      splitTitle: {
        firstLine: `La procédure de déclaration`,
        secondLine: `des préposés d’établissement`,
      },
      title: `La procédure de déclaration \n des préposés d’établissement`,
      url: `/devenir-professionnel/la-procedure-de-declaration-des-preposes-d-etablissement`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-devenir-pro-b.png`,
      splitTitle: {
        firstLine: `La formation au certificat`,
        secondLine: `national de compétences`,
      },
      title: `La formation au certificat \n national de compétences`,
      url: `/devenir-professionnel/la-formation-au-certificat-national-de-competences`,
    },
  ],
};

export const appelCandidaturesProjetsPageData = {
  heading: `Appel à candidatures et à projets`,
  sections: [
    {
      _id: 0,
      content: <DevenirMandataireAppelCandidatures />,
      title: `Appel à candidatures `,
    },
    {
      _id: 1,
      content: <DevenirMandataireAppelProjets />,
      title: `Appel à projets`,
    },
  ],
};
