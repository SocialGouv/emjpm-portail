import getConfig from "next/config";
import React from "react";

import {
  CessationActivite,
  DeclarationActiviteEnquete,
  DeclarationActiviteSemestrielle,
  DeclarationActiviteSite,
  DemandeDeNouvelAgrement,
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
  FinancementApplicationArticle,
  FinancementDifferentsCouts,
  FinancementIndemniteComplementaire,
  FinancementModalitesDeCalcul,
  FinancementOutilDeCalcul,
  FinancementSystemeDeFinancement,
  MissionsCasCuratelle,
  MissionsCasMesureAccompagnement,
  MissionsCasSauvegardeJustice,
  MissionsCasTutelle,
  MissionsEtActivitesDuMandataire,
  ObligationsAdministrativesDuMandataire,
  ObligationsControles,
  ObligationsEnvoiDesPieces,
  ObligationsMiseEnPlaceMoyensMentionnes,
  ObligationsPrestationDeSerment,
  SanctionsCasNonRespectDesEngagements,
  TachesDuMandataireIndividuel,
} from "../content";

const { publicRuntimeConfig } = getConfig();

export const mandataireIndividuelIndexPageData = {
  heading: `Je suis un mandataire individuel`,
  sections: [
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Les missions et les activités du mandataire`,
      url: `/professionnel/je-suis-un-mandataire-individuel/les-missions-et-les-activites-du-mandataire`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Les tâches du mandataire individuel`,
      url: `/professionnel/je-suis-un-mandataire-individuel/les-taches-du-mandataire-individuel`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Les droits du protégé`,
      url: "/professionnel/je-suis-un-mandataire-individuel/les-droits-du-protege",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Les obligations administratives du mandataire`,
      url: `/professionnel/je-suis-un-mandataire-individuel/les-obligations-administratives-du-mandataire`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `La déclaration d'activité`,
      url: `/professionnel/je-suis-un-mandataire-individuel/la-declaration-d-activite`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Le financement des mandataires individuels`,
      url: `/professionnel/je-suis-un-mandataire-individuel/le-financement-des-mandataires-individuels`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Les sanctions en cas de non-respect des engagements`,
      url: `/professionnel/je-suis-un-mandataire-individuel/les-sanctions-en-cas-de-non-respect-des-engagements`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `La demande de nouvel agrément`,
      url: `/professionnel/je-suis-un-mandataire-individuel/demande-de-nouvel-agrement`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: `Cessation d'activité`,
      url: `/professionnel/je-suis-un-mandataire-individuel/cessation-d-activite`,
    },
  ],
};

export const mandataireMissionPageData = {
  heading: `Les missions et les activités du mandataire`,
  mainSection: {
    content: <MissionsEtActivitesDuMandataire />,
    title: `Les missions et les activités du mandataire`,
  },
  sections: [
    {
      _id: 0,
      content: <MissionsCasCuratelle />,
      title: `Dans le cas d'une curatelle`,
    },
    {
      _id: 1,
      content: <MissionsCasTutelle />,
      title: `Dans le cas d'une tutelle`,
    },
    {
      _id: 2,
      content: <MissionsCasSauvegardeJustice />,
      title: `Dans le cas de la sauvegarde de justice`,
    },
    {
      _id: 3,
      content: <MissionsCasMesureAccompagnement />,
      title: `Dans le cas d'une mesure d'accompagnement judiciaire`,
    },
  ],
};

export const TachesduMandataireIndividuelPageData = {
  heading: `Les tâches du mandataire individuel`,
  sections: [
    {
      _id: 0,
      content: <TachesDuMandataireIndividuel />,
      title: `Les tâches du mandataire individuel`,
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

export const ObligationsAdministrativesMandatairePageData = {
  heading: `Les obligations administratives du mandataire`,
  mainSection: {
    content: <ObligationsAdministrativesDuMandataire />,
    title: `Les obligations administratives du mandataire`,
  },
  sections: [
    {
      _id: 0,
      content: <ObligationsEnvoiDesPieces />,
      title: `Envoi des pièces après notification de l'agrément`,
    },
    {
      _id: 1,
      content: <ObligationsMiseEnPlaceMoyensMentionnes />,
      title: `Mise en place des moyens mentionnés dans le dossier`,
    },
    {
      _id: 2,
      content: <ObligationsPrestationDeSerment />,
      title: `Prestation de serment`,
    },
    {
      _id: 3,
      content: <ObligationsControles />,
      title: `Contrôles`,
    },
  ],
};

export const DeclarationActivitePageData = {
  heading: `La déclaration d'activité`,
  sections: [
    {
      _id: 0,
      content: <DeclarationActiviteSemestrielle />,
      title: `La déclaration semestrielle`,
    },
    {
      _id: 1,
      content: <DeclarationActiviteSite />,
      title: `Le site e-MJPM`,
    },
    {
      _id: 2,
      content: <DeclarationActiviteEnquete />,
      title: `L'enquête annuelle`,
    },
  ],
};

export const FinancementMandatairesIndividuelsPageData = {
  heading: `Le financement des mandataires individuels`,
  sections: [
    {
      _id: 0,
      content: <FinancementSystemeDeFinancement />,
      title: `Le système de financement des mesures`,
    },
    {
      _id: 1,
      content: <FinancementOutilDeCalcul />,
      title: `L'outil de calcul des mandataires individuels`,
    },
    {
      _id: 2,
      content: <FinancementApplicationArticle />,
      title: `L’application de l’article R 472-8`,
    },
    {
      _id: 3,
      content: <FinancementModalitesDeCalcul />,
      title: `Les modalités de calcul de coût des mesures`,
    },
    {
      _id: 4,
      content: <FinancementDifferentsCouts />,
      title: `Les différents coûts au regard des indicateurs`,
    },
    {
      _id: 5,
      content: <FinancementIndemniteComplementaire />,
      title: `Indemnité complémentaire`,
    },
  ],
};

export const SanctionsNonRespectEngagementsPageData = {
  heading: `Les sanctions en cas de non-respect des engagements`,
  mainSection: {
    content: <SanctionsCasNonRespectDesEngagements />,
    title: `Les sanctions en cas de non-respect des engagements`,
  },
};

export const DemandeNouvelAgrementPageData = {
  heading: `La demande de nouvel agrément`,
  mainSection: {
    content: <DemandeDeNouvelAgrement />,
    title: `La demande de nouvel agrément`,
  },
};

export const CessationActivitePageData = {
  heading: `Cessation d'activité`,
  mainSection: {
    content: <CessationActivite />,
    title: `Cessation d'activité`,
  },
};
