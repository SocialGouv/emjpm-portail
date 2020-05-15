import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const professionnelPageData = {
  heading: `Bienvenue sur le portail de la Protection Juridique des Majeurs`,
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
