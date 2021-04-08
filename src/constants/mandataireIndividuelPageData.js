import React from "react";

import {
  MandataireCessationActivite,
  MandataireDeclarationActiviteEnquete,
  MandataireDeclarationActiviteSemestrielle,
  MandataireDeclarationActiviteSite,
  MandataireDemandeDeNouvelAgrement,
  MandataireDroitsDuProtege,
  MandataireDroitsDuProtegeArticle1,
  MandataireDroitsDuProtegeArticle2,
  MandataireDroitsDuProtegeArticle3,
  MandataireDroitsDuProtegeArticle4,
  MandataireDroitsDuProtegeArticle5,
  MandataireDroitsDuProtegeArticle6,
  MandataireDroitsDuProtegeArticle7,
  MandataireDroitsDuProtegeArticle8,
  MandataireDroitsDuProtegeArticle9,
  MandataireDroitsDuProtegeArticle10,
  MandataireDroitsDuProtegeArticle11,
  MandataireDroitsDuProtegeArticle12,
  MandataireDroitsDuProtegeArticle13,
  MandataireFinancementApplicationArticle,
  MandataireFinancementDifferentsCouts,
  MandataireFinancementIndemniteComplementaire,
  MandataireFinancementModalitesDeCalcul,
  MandataireFinancementOutilDeCalcul,
  MandataireFinancementSystemeDeFinancement,
  MandataireMissionsCasCuratelle,
  MandataireMissionsCasMesureAccompagnement,
  MandataireMissionsCasSauvegardeJustice,
  MandataireMissionsCasTutelle,
  MandataireMissionsEtActivitesDuMandataire,
  MandataireObligationsAdministrativesDuMandataire,
  MandataireObligationsControles,
  MandataireObligationsEnvoiDesPieces,
  MandataireObligationsMiseEnPlaceMoyensMentionnes,
  MandataireObligationsPrestationDeSerment,
  MandataireSanctionsCasNonRespectDesEngagements,
  MandataireTachesDuMandataireIndividuel,
} from "../content";

export const mandataireIndividuelIndexPageData = {
  heading: `Je suis un mandataire individuel`,
  sections: [
    {
      image: `/bg-a.png`,
      title: `Les missions et les activités du mandataire`,
      url: `/professionnel/je-suis-un-mandataire-individuel/les-missions-et-les-activites-du-mandataire`,
    },
    {
      image: `/bg-a.png`,
      title: `Les tâches du mandataire individuel`,
      url: `/professionnel/je-suis-un-mandataire-individuel/les-taches-du-mandataire-individuel`,
    },
    {
      image: `/bg-a.png`,
      title: `Les droits du protégé`,
      url: "/professionnel/je-suis-un-mandataire-individuel/les-droits-du-protege",
    },
    {
      image: `/bg-a.png`,
      title: `Les obligations administratives du mandataire`,
      url: `/professionnel/je-suis-un-mandataire-individuel/les-obligations-administratives-du-mandataire`,
    },
    {
      image: `/bg-a.png`,
      title: `La déclaration d'activité`,
      url: `/professionnel/je-suis-un-mandataire-individuel/la-declaration-d-activite`,
    },
    {
      image: `/bg-a.png`,
      title: `Le financement des mandataires individuels`,
      url: `/professionnel/je-suis-un-mandataire-individuel/le-financement-des-mandataires-individuels`,
    },
    {
      image: `/bg-a.png`,
      title: `Les sanctions en cas de non-respect des engagements`,
      url: `/professionnel/je-suis-un-mandataire-individuel/les-sanctions-en-cas-de-non-respect-des-engagements`,
    },
    {
      image: `/bg-a.png`,
      title: `La demande de nouvel agrément`,
      url: `/professionnel/je-suis-un-mandataire-individuel/demande-de-nouvel-agrement`,
    },
    {
      image: `/bg-a.png`,
      title: `Cessation d'activité`,
      url: `/professionnel/je-suis-un-mandataire-individuel/cessation-d-activite`,
    },
  ],
};

export const mandataireMissionPageData = {
  heading: `Les missions et les activités du mandataire`,
  mainSection: {
    content: <MandataireMissionsEtActivitesDuMandataire />,
    title: `Les missions et les activités du mandataire`,
  },
  sections: [
    {
      _id: 0,
      content: <MandataireMissionsCasCuratelle />,
      title: `Dans le cas d'une curatelle`,
    },
    {
      _id: 1,
      content: <MandataireMissionsCasTutelle />,
      title: `Dans le cas d'une tutelle`,
    },
    {
      _id: 2,
      content: <MandataireMissionsCasSauvegardeJustice />,
      title: `Dans le cas de la sauvegarde de justice`,
    },
    {
      _id: 3,
      content: <MandataireMissionsCasMesureAccompagnement />,
      title: `Dans le cas d'une mesure d'accompagnement judiciaire`,
    },
  ],
};

export const TachesduMandataireIndividuelPageData = {
  heading: `Les tâches du mandataire individuel`,
  sections: [
    {
      _id: 0,
      content: <MandataireTachesDuMandataireIndividuel />,
      title: `Les tâches du mandataire individuel`,
    },
  ],
};

export const droitsDuProtegePageData = {
  heading: `Les droits du protégé`,
  sections: [
    {
      _id: 0,
      content: <MandataireDroitsDuProtege />,
      subSection: {
        articleContent: [
          {
            _id: 0,
            content: <MandataireDroitsDuProtegeArticle1 />,
            title: `Article 1er : Respect des libertés individuelles et des droits civiques`,
          },
          {
            _id: 1,
            content: <MandataireDroitsDuProtegeArticle2 />,
            title: `Article 2 : Non-discrimination`,
          },
          {
            _id: 2,
            content: <MandataireDroitsDuProtegeArticle3 />,
            title: `Article 3 : Respect de la dignité de la personne et de son intégrité`,
          },
          {
            _id: 3,
            content: <MandataireDroitsDuProtegeArticle4 />,
            title: `Article 4 : Liberté des relations personnelles`,
          },
          {
            _id: 4,
            content: <MandataireDroitsDuProtegeArticle5 />,
            title: `Article 5 : Droit au respect des liens familiaux`,
          },
          {
            _id: 5,
            content: <MandataireDroitsDuProtegeArticle6 />,
            title: `Article 6 : Droit à l’information`,
          },
          {
            _id: 6,
            content: <MandataireDroitsDuProtegeArticle7 />,
            title: `Article 7 : Droit à l’autonomie `,
          },
          {
            _id: 7,
            content: <MandataireDroitsDuProtegeArticle8 />,
            title: `Article 8 : Droit à la protection du logement et des objets personnels`,
          },
          {
            _id: 8,
            content: <MandataireDroitsDuProtegeArticle9 />,
            title: `Article 9 : Consentement éclairé et participation de la personne`,
          },
          {
            _id: 9,
            content: <MandataireDroitsDuProtegeArticle10 />,
            title: `Article 10 : Droit à une intervention personnalisée`,
          },
          {
            _id: 10,
            content: <MandataireDroitsDuProtegeArticle11 />,
            title: `Article 11 : Droit à l’accès aux soins`,
          },
          {
            _id: 11,
            content: <MandataireDroitsDuProtegeArticle12 />,
            title: `Article 12 : Protection des biens dans l’intérêt exclusif de la personne`,
          },
          {
            _id: 12,
            content: <MandataireDroitsDuProtegeArticle13 />,
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
    content: <MandataireObligationsAdministrativesDuMandataire />,
    title: `Les obligations administratives du mandataire`,
  },
  sections: [
    {
      _id: 0,
      content: <MandataireObligationsEnvoiDesPieces />,
      title: `Envoi des pièces après notification de l'agrément`,
    },
    {
      _id: 1,
      content: <MandataireObligationsMiseEnPlaceMoyensMentionnes />,
      title: `Mise en place des moyens mentionnés dans le dossier`,
    },
    {
      _id: 2,
      content: <MandataireObligationsPrestationDeSerment />,
      title: `Prestation de serment`,
    },
    {
      _id: 3,
      content: <MandataireObligationsControles />,
      title: `Contrôles`,
    },
  ],
};

export const DeclarationActivitePageData = {
  heading: `La déclaration d'activité`,
  sections: [
    {
      _id: 0,
      content: <MandataireDeclarationActiviteSemestrielle />,
      title: `La déclaration semestrielle`,
    },
    {
      _id: 1,
      content: <MandataireDeclarationActiviteSite />,
      title: `Le site e-MJPM`,
    },
    {
      _id: 2,
      content: <MandataireDeclarationActiviteEnquete />,
      title: `L'enquête annuelle`,
    },
  ],
};

export const FinancementMandatairesIndividuelsPageData = {
  heading: `Le financement des mandataires individuels`,
  sections: [
    {
      _id: 0,
      content: <MandataireFinancementSystemeDeFinancement />,
      title: `Le système de financement des mesures`,
    },
    {
      _id: 1,
      content: <MandataireFinancementOutilDeCalcul />,
      title: `L'outil de calcul des mandataires individuels`,
    },
    {
      _id: 2,
      content: <MandataireFinancementApplicationArticle />,
      title: `L’application de l’article R 472-8`,
    },
    {
      _id: 3,
      content: <MandataireFinancementModalitesDeCalcul />,
      title: `Les modalités de calcul de coût des mesures`,
    },
    {
      _id: 4,
      content: <MandataireFinancementDifferentsCouts />,
      title: `Les différents coûts au regard des indicateurs`,
    },
    {
      _id: 5,
      content: <MandataireFinancementIndemniteComplementaire />,
      title: `Indemnité complémentaire`,
    },
  ],
};

export const SanctionsNonRespectEngagementsPageData = {
  heading: `Les sanctions en cas de non-respect des engagements`,
  mainSection: {
    content: <MandataireSanctionsCasNonRespectDesEngagements />,
    title: `Les sanctions en cas de non-respect des engagements`,
  },
};

export const DemandeNouvelAgrementPageData = {
  heading: `La demande de nouvel agrément`,
  mainSection: {
    content: <MandataireDemandeDeNouvelAgrement />,
    title: `La demande de nouvel agrément`,
  },
};

export const CessationActivitePageData = {
  heading: `Cessation d'activité`,
  mainSection: {
    content: <MandataireCessationActivite />,
    title: `Cessation d'activité`,
  },
};
