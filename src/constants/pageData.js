import getConfig from "next/config";
import React from "react";

import {
  CuratelleContent,
  DroitsDuProtege,
  DroitsDuProtegeArticle1,
  DroitsDuProtegeArticle2,
  DroitsDuProtegeArticle3,
  DroitsDuProtegeArticle4,
  DroitsDuProtegeArticle5,
  DroitsDuProtegeArticle6,
  DroitsDuProtegeArticle7,
  DroitsDuProtegeArticle8,
  DroitsDuProtegeArticle9,
  DroitsDuProtegeArticle10,
  DroitsDuProtegeArticle11,
  DroitsDuProtegeArticle12,
  DroitsDuProtegeArticle13,
  JudiciaryArticleContentOne,
  JudiciaryArticleContentThree,
  JudiciaryArticleContentTwo,
  JudiciaryContent,
  JusticeContent,
  TutelleContent,
} from "../content";

const { publicRuntimeConfig } = getConfig();

const mainHeadingText = `Bienvenue sur le portail de la Protection Juridique des Majeurs`;

export const professionnelIndexPageData = {
  heading: mainHeadingText,
  sections: [
    {
      image: `${publicRuntimeConfig.appUrl}/bg-pro-a.png`,
      splitTitle: { firstLine: `je suis`, secondLine: `un mandataire individuel` },
      title: `Je suis un mandataire \n individuel`,
      url: `/professionnel/je-suis-un-mandataire-individuel`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-pro-c.png`,
      splitTitle: { firstLine: `je suis`, secondLine: `un service de mandataire` },
      title: `Je suis un service de \n mandataire`,
      url: `/professionnel/je-suis-un-service-de-mandataire`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-pro-b.png`,
      splitTitle: { firstLine: `je suis`, secondLine: `un préposé d'établissement` },
      title: `Je suis un préposé \n d'établissement`,
      url: `/professionnel/je-suis-un-prepose-d-etablissement`,
    },
  ],
};

export const mandataireIndividuelIndexPageData = {
  heading: mainHeadingText,
  sections: [
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Les missions et les \n activités du mandataire`,
      url: `/professionnel/je-suis-un-mandataire-individuel/les-missions-et-les-activites-du-mandataire`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Les tâches du mandataire \n individuel`,
      url: "/",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Les droits du protégé`,
      url: "/professionnel/je-suis-un-mandataire-individuel/les-droits-du-protege",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Les obligations \n administratives du mandataire`,
      url: `/professionnel/je-suis-un-mandataire-individuel/les-obligations-en-tant-que-mandataire-individuel`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `La déclaration d'activité`,
      url: "/",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Le financement des \n mandataires individuels`,
      url: `/professionnel/je-suis-un-mandataire-individuel/le-financement-des-mandataires-individuel`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Les sanctions en cas de non-\nrespect des engagements`,
      url: "/",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `La demande de nouvel \nagrément`,
      url: "/",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Cessation d'activité`,
      url: "/",
    },
  ],
};

export const mandataireMissionPageData = {
  heading: `Les missions et les activités du mandataire`,
  sections: [
    {
      _id: 0,
      content: <CuratelleContent />,
      title: `Dans le cas d'une curatelle`,
    },
    {
      _id: 1,
      content: <TutelleContent />,
      title: `Dans le cas d'une tutelle`,
    },
    {
      _id: 2,
      content: <JusticeContent />,
      title: `Dans le cas de la sauvegarde de justice`,
    },
    {
      _id: 3,
      content: <JudiciaryContent />,
      subSection: {
        articleContent: [
          {
            _id: 0,
            content: <JudiciaryArticleContentOne />,
            title: `Article 1: Sed a quam id magna interdum dignissim.`,
          },
          {
            _id: 1,
            content: <JudiciaryArticleContentTwo />,
            title: `Article 2: Sed a quam id magna interdum dignissim.`,
          },
          {
            _id: 2,
            content: <JudiciaryArticleContentThree />,
            title: `Article 3: Sed a quam id magna interdum dignissim.`,
          },
        ],
      },
      title: `Dans le cas d'une mesure d'accompagnement judiciaire`,
    },
  ],
};

export const droitsDuProtegePageData = {
  heading: `Les droits du protégé`,
  sections: [
    {
      _id: 0,
      content: <DroitsDuProtege />,
      subSection: {
        articleContent: [
          {
            _id: 0,
            content: <DroitsDuProtegeArticle1 />,
            title: `Article 1er : Respect des libertés individuelles et des droits civiques`,
          },
          {
            _id: 1,
            content: <DroitsDuProtegeArticle2 />,
            title: `Article 2 : Non-discrimination`,
          },
          {
            _id: 2,
            content: <DroitsDuProtegeArticle3 />,
            title: `Article 3 : Respect de la dignité de la personne et de son intégrité`,
          },
          {
            _id: 3,
            content: <DroitsDuProtegeArticle4 />,
            title: `Article 4 : Liberté des relations personnelles`,
          },
          {
            _id: 4,
            content: <DroitsDuProtegeArticle5 />,
            title: `Article 5 : Droit au respect des liens familiaux`,
          },
          {
            _id: 5,
            content: <DroitsDuProtegeArticle6 />,
            title: `Article 6 : Droit à l’information`,
          },
          {
            _id: 6,
            content: <DroitsDuProtegeArticle7 />,
            title: `Article 7 : Droit à l’autonomie `,
          },
          {
            _id: 7,
            content: <DroitsDuProtegeArticle8 />,
            title: `Article 8 : Droit à la protection du logement et des objets personnels`,
          },
          {
            _id: 8,
            content: <DroitsDuProtegeArticle9 />,
            title: `Article 9 : Consentement éclairé et participation de la personne`,
          },
          {
            _id: 9,
            content: <DroitsDuProtegeArticle10 />,
            title: `Article 10 : Droit à une intervention personnalisée`,
          },
          {
            _id: 10,
            content: <DroitsDuProtegeArticle11 />,
            title: `Article 11 : Droit à l’accès aux soins`,
          },
          {
            _id: 11,
            content: <DroitsDuProtegeArticle12 />,
            title: `Article 12 : Protection des biens dans l’intérêt exclusif de la personne`,
          },
          {
            _id: 12,
            content: <DroitsDuProtegeArticle13 />,
            title: `Article 13 : Confidentialité des informations`,
          },
        ],
      },
      title: `Les droits du protégé`,
    },
  ],
};
