import React from "react";

import {
  PreposeDeclarationActiviteEnquete,
  PreposeDeclarationActiviteSite,
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
  PreposeNouvelleDeclarationPrepose,
  PreposeObligationsControles,
  PreposeObligationsPrestationSerment,
  PreposeSystemeFinancementEtablissementMedicoSociaux,
  PreposeSystemeFinancementEtablissementServicePublic,
  PreposeSystemeFinancementStructures,
  PreposeSystemeParticipationDifferentsCouts,
  PreposeSystemeParticipationIndemnite,
  PreposeSystemeParticipationModalitesCalculCoutsMesures,
} from "../content";

export const preposeEtablissementIndexPageData = {
  heading: `Je suis un préposé d'établissement`,
  sections: [
    {
      image: `/bg-c.png`,
      title: `Obligations administratives du preposé`,
      url: `/professionnel/je-suis-un-prepose-d-etablissement/obligations-administratives-du-prepose`,
    },
    {
      image: `/bg-c.png`,
      title: `Les droits du protégé`,
      url: "/professionnel/je-suis-un-prepose-d-etablissement/les-droits-du-protege",
    },
    {
      image: `/bg-c.png`,
      title: `La déclaration d'activité`,
      url: `/professionnel/je-suis-un-prepose-d-etablissement/la-declaration-d-activite`,
    },
    {
      image: `/bg-c.png`,
      title: `Le système de financement des mesures`,
      url:
        "/professionnel/je-suis-un-prepose-d-etablissement/le-systeme-de-financement-des-mesures",
    },
    {
      image: `/bg-c.png`,
      title: `Le système de participation et la grille de coût`,
      url: `/professionnel/je-suis-un-prepose-d-etablissement/le-systeme-de-participation-et-la-grille-de-cout`,
    },
    {
      image: `/bg-c.png`,
      title: `Nouvelle déclaration du préposé`,
      url: `/professionnel/je-suis-un-prepose-d-etablissement/nouvelle-declaration-du-prepose`,
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

export const preposeEtablissementEvolutionActivitePageData = {
  heading: `Nouvelle déclaration du préposé`,
  mainSection: {
    content: <PreposeNouvelleDeclarationPrepose />,
    title: `Nouvelle déclaration du préposé`,
  },
};

export const preposeEtablissementDeclarationActivitePageData = {
  heading: `La déclaration d'activité`,
  sections: [
    {
      _id: 0,
      content: <PreposeDeclarationActiviteSite />,
      title: `Le site e-MJPM`,
    },
    {
      _id: 1,
      content: <PreposeDeclarationActiviteEnquete />,
      title: `L'enquête annuelle`,
    },
  ],
};

export const preposeEtablissementSystemeFinancementMesuresPageData = {
  heading: `Le système de financement des mesures`,
  sections: [
    {
      _id: 0,
      content: <PreposeSystemeFinancementEtablissementServicePublic />,
      title: `Les établissements participant au service public hospitalier (PSPH) et dispensant des soins psychiatriques`,
    },
    {
      _id: 1,
      content: <PreposeSystemeFinancementStructures />,
      title: `Les structures prenant en charge des personnes âgées dépendantes`,
    },
    {
      _id: 2,
      content: <PreposeSystemeFinancementEtablissementMedicoSociaux />,
      title: `Les établissements médico-sociaux accueillant des personnes handicapées`,
    },
  ],
};

export const preposeEtablissementSystemeParticipationPageData = {
  heading: `Le système de participation et la grille de coût`,
  sections: [
    {
      _id: 0,
      content: <PreposeSystemeParticipationModalitesCalculCoutsMesures />,
      title: `Les modalités de calcul de coût des mesures`,
    },
    {
      _id: 1,
      content: <PreposeSystemeParticipationDifferentsCouts />,
      title: `Les différents coûts au regard des indicateurs`,
    },
    {
      _id: 2,
      content: <PreposeSystemeParticipationIndemnite />,
      title: `Indemnité complémentaire`,
    },
  ],
};
