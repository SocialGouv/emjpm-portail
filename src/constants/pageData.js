import getConfig from "next/config";
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
      title: "Les missions et les \n activités du mandataire",
      url: "/",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: "Les tâches du mandataire \n individuel",
      url: "/",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: "Les droits du protégé",
      url: "/",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: "Les obligations \n administratives du mandataire",
      url:
        "/professionnel/je-suis-un-mandataire-individuel/les-obligations-en-tant-que-mandataire-individuel",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: "La déclaration d'activité",
      url: "/",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: "Le financement des \n mandataires individuels",
      url:
        "/professionnel/je-suis-un-mandataire-individuel/le-financement-des-mandataires-individuel",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: "Les sanctions en cas de non-\nrespect des engagements",
      url: "/",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: "La demande de nouvel \nagrément",
      url: "/",
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-a.png`,
      title: "Cessation d'activité",
      url: "/",
    },
  ],
};
