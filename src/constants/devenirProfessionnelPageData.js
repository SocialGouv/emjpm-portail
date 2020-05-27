import getConfig from "next/config";
import React from "react";

import {
  DevenirMandataireAppelCandidatures,
  DevenirMandataireAppelProjets,
  DevenirMandataireFormationCertificatConditions,
  DevenirMandataireFormationCertificatDeroulement,
  DevenirMandataireFormationCertificatDispenses,
  DevenirMandataireFormationCertificatObjetFormation,
  DevenirMandataireProcedureAgrementConditions,
  DevenirMandataireProcedureAgrementEtapes,
  DevenirMandataireProcedureAgrementRecoursRefus,
  DevenirMandataireProcedureAutorisationConditions,
  DevenirMandataireProcedureAutorisationProcedure,
  DevenirMandataireProcedureDeclaration,
} from "../content";

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
      title: `Appel à candidatures`,
    },
    {
      _id: 1,
      content: <DevenirMandataireAppelProjets />,
      title: `Appel à projets`,
    },
  ],
};

export const procedureAgrementMandataireIndividuelsPageData = {
  heading: `La procédure d’agrément des mandataires individuels`,
  sections: [
    {
      _id: 0,
      content: <DevenirMandataireProcedureAgrementConditions />,
      title: `Les conditions à satisfaire`,
    },
    {
      _id: 1,
      content: <DevenirMandataireProcedureAgrementEtapes />,
      title: `Les étapes de la procédure`,
    },
    {
      _id: 2,
      content: <DevenirMandataireProcedureAgrementRecoursRefus />,
      title: `La procédure de recours suite à un refus d’agrément`,
    },
  ],
};

export const procedureAutorisationServicesMandatairePageData = {
  heading: `La procédure d’autorisation des services mandataires`,
  sections: [
    {
      _id: 0,
      content: <DevenirMandataireProcedureAutorisationConditions />,
      title: `Les conditions d’autorisation`,
    },
    {
      _id: 1,
      content: <DevenirMandataireProcedureAutorisationProcedure />,
      title: `La procédure d’autorisation d’un service mandataire`,
    },
  ],
};

export const procedureDeclarationPreposesEtablissementPageData = {
  heading: `La procédure de déclaration des préposés d’établissement`,
  mainSection: {
    content: <DevenirMandataireProcedureDeclaration />,
    title: `La procédure de déclaration des préposés d’établissement`,
  },
};

export const formationCertificatNationalCompetencesPageData = {
  heading: `La formation au certificat \n national de compétences`,
  sections: [
    {
      _id: 0,
      content: <DevenirMandataireFormationCertificatObjetFormation />,
      title: `L’objet de la formation`,
    },
    {
      _id: 1,
      content: <DevenirMandataireFormationCertificatConditions />,
      title: `Les conditions d’accès à la formation`,
    },
    {
      _id: 2,
      content: <DevenirMandataireFormationCertificatDeroulement />,
      title: `Le déroulement de la formation`,
    },
    {
      _id: 3,
      content: <DevenirMandataireFormationCertificatDispenses />,
      title: `Les dispenses et les allègements à la formation`,
    },
  ],
};
