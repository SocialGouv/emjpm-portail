import getConfig from "next/config";
import React from "react";

import {
  ServiceDeclarationActiviteEnquete,
  ServiceDeclarationActiviteSite,
  ServiceDroitsDuProtege,
  ServiceDroitsDuProtegeArticle1,
  ServiceDroitsDuProtegeArticle2,
  ServiceDroitsDuProtegeArticle3,
  ServiceDroitsDuProtegeArticle4,
  ServiceDroitsDuProtegeArticle5,
  ServiceDroitsDuProtegeArticle6,
  ServiceDroitsDuProtegeArticle7,
  ServiceDroitsDuProtegeArticle8,
  ServiceDroitsDuProtegeArticle9,
  ServiceDroitsDuProtegeArticle10,
  ServiceDroitsDuProtegeArticle11,
  ServiceDroitsDuProtegeArticle12,
  ServiceDroitsDuProtegeArticle13,
  ServiceEvolutionCapaciteServiceMandataire,
  ServiceObligationsAdminDelegueControles,
  ServiceObligationsAdminDeleguePrestationSerment,
  ServiceSystemeFinancementMesures,
  ServiceSystemeParticipationDifferentsCoutsIndicateurs,
  ServiceSystemeParticipationIndemnite,
  ServiceSystemeParticipationModalitesCalculCoutMesures,
} from "../content";

const { publicRuntimeConfig } = getConfig();

const mainHeadingText = `Bienvenue sur le portail de la Protection Juridique des Majeurs`;

export const serviceMandataireIndexPageData = {
  heading: mainHeadingText,
  sections: [
    {
      image: `${publicRuntimeConfig.appUrl}/bg-b.png`,
      title: `Obligations administratives du delegué de service`,
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
      title: `Le système de financement des mesures`,
      url: "/professionnel/je-suis-un-service-mandataire/le-systeme-de-financement-des-mesures",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-b.png`,
      title: `Le système de participation et la grille de coût`,
      url: `/professionnel/je-suis-un-service-mandataire/le-systeme-de-participation-et-la-grille-de-cout`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-b.png`,
      title: `L'évolution de la capacité du service mandataire`,
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

export const serviceMandataireDroitsDuProtegePageData = {
  heading: `Les droits du protégé`,
  sections: [
    {
      _id: 0,
      content: <ServiceDroitsDuProtege />,
      subSection: {
        articleContent: [
          {
            _id: 0,
            content: <ServiceDroitsDuProtegeArticle1 />,
            title: `Article 1er : Respect des libertés individuelles et des droits civiques`,
          },
          {
            _id: 1,
            content: <ServiceDroitsDuProtegeArticle2 />,
            title: `Article 2 : Non-discrimination`,
          },
          {
            _id: 2,
            content: <ServiceDroitsDuProtegeArticle3 />,
            title: `Article 3 : Respect de la dignité de la personne et de son intégrité`,
          },
          {
            _id: 3,
            content: <ServiceDroitsDuProtegeArticle4 />,
            title: `Article 4 : Liberté des relations personnelles`,
          },
          {
            _id: 4,
            content: <ServiceDroitsDuProtegeArticle5 />,
            title: `Article 5 : Droit au respect des liens familiaux`,
          },
          {
            _id: 5,
            content: <ServiceDroitsDuProtegeArticle6 />,
            title: `Article 6 : Droit à l’information`,
          },
          {
            _id: 6,
            content: <ServiceDroitsDuProtegeArticle7 />,
            title: `Article 7 : Droit à l’autonomie `,
          },
          {
            _id: 7,
            content: <ServiceDroitsDuProtegeArticle8 />,
            title: `Article 8 : Droit à la protection du logement et des objets personnels`,
          },
          {
            _id: 8,
            content: <ServiceDroitsDuProtegeArticle9 />,
            title: `Article 9 : Consentement éclairé et participation de la personne`,
          },
          {
            _id: 9,
            content: <ServiceDroitsDuProtegeArticle10 />,
            title: `Article 10 : Droit à une intervention personnalisée`,
          },
          {
            _id: 10,
            content: <ServiceDroitsDuProtegeArticle11 />,
            title: `Article 11 : Droit à l’accès aux soins`,
          },
          {
            _id: 11,
            content: <ServiceDroitsDuProtegeArticle12 />,
            title: `Article 12 : Protection des biens dans l’intérêt exclusif de la personne`,
          },
          {
            _id: 12,
            content: <ServiceDroitsDuProtegeArticle13 />,
            title: `Article 13 : Confidentialité des informations`,
          },
        ],
      },
      title: `Les droits du protégé`,
    },
  ],
};

export const serviceMandataireDeclarationActivitePageData = {
  heading: `La déclaration d'activité`,
  sections: [
    {
      _id: 0,
      content: <ServiceDeclarationActiviteSite />,
      title: `Le site e-MJPM`,
    },
    {
      _id: 1,
      content: <ServiceDeclarationActiviteEnquete />,
      title: `L'enquête annuelle`,
    },
  ],
};

export const serviceMandataireSystemeFinancementMesuresPageData = {
  heading: `Le système de financement des mesures`,
  mainSection: {
    content: <ServiceSystemeFinancementMesures />,
    title: `Le système de financement des mesures`,
  },
};

export const serviceMandataireSystemeParticipationPageData = {
  heading: `Le système de participation et la grille de coût`,
  sections: [
    {
      _id: 0,
      content: <ServiceSystemeParticipationModalitesCalculCoutMesures />,
      title: `Les modalités de calcul de coût des mesures`,
    },
    {
      _id: 1,
      content: <ServiceSystemeParticipationDifferentsCoutsIndicateurs />,
      title: `Les différents coûts au regard des indicateurs`,
    },
    {
      _id: 2,
      content: <ServiceSystemeParticipationIndemnite />,
      title: `L'indemnité complémentaire`,
    },
  ],
};

export const serviceMandataireEvolutionCapacitePageData = {
  heading: `L’évolution de la capacité du service mandataire`,
  mainSection: {
    content: <ServiceEvolutionCapaciteServiceMandataire />,
    title: `L’évolution de la capacité du service mandataire`,
  },
};
