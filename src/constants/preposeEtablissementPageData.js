import getConfig from "next/config";
import React from "react";

import {
  PreposeDroitsDuProtege,
  PreposeDroitsDuProtegeArticle1,
  PreposeDroitsDuProtegeArticle2,
  PreposeDroitsDuProtegeArticle3,
  PreposeDroitsDuProtegeArticle4,
  PreposeDroitsDuProtegeArticle5,
  PreposeDroitsDuProtegeArticle6,
  PreposeDroitsDuProtegeArticle7,
  PreposeDroitsDuProtegeArticle8,
  PreposeDroitsDuProtegeArticle9,
  PreposeDroitsDuProtegeArticle10,
  PreposeDroitsDuProtegeArticle11,
  PreposeDroitsDuProtegeArticle12,
  PreposeDroitsDuProtegeArticle13,
  PreposeObligationsControles,
  PreposeObligationsPrestationSerment,
} from "../content";

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

export const preposeEtablissementDroitsDuProtegePageData = {
  heading: `Les droits du protégé`,
  sections: [
    {
      _id: 0,
      content: <PreposeDroitsDuProtege />,
      subSection: {
        articleContent: [
          {
            _id: 0,
            content: <PreposeDroitsDuProtegeArticle1 />,
            title: `Article 1er : Respect des libertés individuelles et des droits civiques`,
          },
          {
            _id: 1,
            content: <PreposeDroitsDuProtegeArticle2 />,
            title: `Article 2 : Non-discrimination`,
          },
          {
            _id: 2,
            content: <PreposeDroitsDuProtegeArticle3 />,
            title: `Article 3 : Respect de la dignité de la personne et de son intégrité`,
          },
          {
            _id: 3,
            content: <PreposeDroitsDuProtegeArticle4 />,
            title: `Article 4 : Liberté des relations personnelles`,
          },
          {
            _id: 4,
            content: <PreposeDroitsDuProtegeArticle5 />,
            title: `Article 5 : Droit au respect des liens familiaux`,
          },
          {
            _id: 5,
            content: <PreposeDroitsDuProtegeArticle6 />,
            title: `Article 6 : Droit à l’information`,
          },
          {
            _id: 6,
            content: <PreposeDroitsDuProtegeArticle7 />,
            title: `Article 7 : Droit à l’autonomie `,
          },
          {
            _id: 7,
            content: <PreposeDroitsDuProtegeArticle8 />,
            title: `Article 8 : Droit à la protection du logement et des objets personnels`,
          },
          {
            _id: 8,
            content: <PreposeDroitsDuProtegeArticle9 />,
            title: `Article 9 : Consentement éclairé et participation de la personne`,
          },
          {
            _id: 9,
            content: <PreposeDroitsDuProtegeArticle10 />,
            title: `Article 10 : Droit à une intervention personnalisée`,
          },
          {
            _id: 10,
            content: <PreposeDroitsDuProtegeArticle11 />,
            title: `Article 11 : Droit à l’accès aux soins`,
          },
          {
            _id: 11,
            content: <PreposeDroitsDuProtegeArticle12 />,
            title: `Article 12 : Protection des biens dans l’intérêt exclusif de la personne`,
          },
          {
            _id: 12,
            content: <PreposeDroitsDuProtegeArticle13 />,
            title: `Article 13 : Confidentialité des informations`,
          },
        ],
      },
      title: `Les droits du protégé`,
    },
  ],
};
