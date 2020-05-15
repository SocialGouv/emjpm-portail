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
      url: "/",
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
      content: `Dans le cas d'une curatelle, in interdum sodales nisl id commodo.
    Nulla pretium ipsum et turpis efficitur, ut
    rutrum dolor rutrum. Morbi ultrices dignissim purus, in tincidunt enim facilisis
    nec. Vivamus et nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio
    lectus. Maecenas sit amet augue varius, facilisis erat sit amet, convallis tellus.
    Proin vel tristique nisl.`,
      title: `Dans le cas d'une curatelle`,
    },
    {
      _id: 1,
      content: `Dans le cas d'une tutelle, in interdum sodales nisl id commodo.
  Nulla pretium ipsum et turpis efficitur, ut rutrum dolor rutrum. Morbi ultrices
  dignissim purus, in tincidunt enim facilisis
  nec. Vivamus et nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio
  lectus. Maecenas sit amet augue varius, facilisis erat sit amet, convallis tellus.
  Proin vel tristique nisl.`,
      title: `Dans le cas d'une tutelle`,
    },
    {
      _id: 2,
      content: `Dans le cas de la sauvegarde de justice, in interdum sodales nisl id commodo.
  Nulla pretium ipsum et turpis efficitur, ut rutrum dolor rutrum. Morbi ultrices
  dignissim purus, in tincidunt enim facilisis
  nec. Vivamus et nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio
  lectus. Maecenas sit amet augue varius, facilisis erat sit amet, convallis tellus.
  Proin vel tristique nisl.`,
      title: `Dans le cas de la sauvegarde de justice`,
    },
    {
      _id: 3,
      content: `Dans le cas d'une mesure d'accompagnement judiciaire, in interdum sodales nisl id commodo.
  Nulla pretium ipsum et turpis efficitur, ut rutrum dolor rutrum. Morbi ultrices
  dignissim purus, in tincidunt enim facilisis
  nec. Vivamus et nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio
  lectus. Maecenas sit amet augue varius, facilisis erat sit amet, convallis tellus.
  Proin vel tristique nisl.`,
      subSection: {
        articleContent: [
          {
            _id: 0,
            content: `Art 1 - Vivamus et nunc hendrerit, egestas felis a, fringilla mauris.`,
            title: `Article 1: Respect des libertés individuelles et des droits civiques`,
          },
          {
            _id: 1,
            content: `Art 2 - Vivamus et nunc hendrerit, egestas felis a, fringilla mauris.`,
            title: `Article 2: Respect des libertés individuelles et des droits civiques`,
          },
          {
            _id: 2,
            content: `Art 3 - Vivamus et nunc hendrerit, egestas felis a, fringilla mauris.`,
            title: `Article 3: Respect des libertés individuelles et des droits civiques`,
          },
        ],
        panelContent: `In interdum sodales nisl id commodo. Nulla pretium ipsum et turpis efficitur, ut
      rutrum dolor rutrum. Morbi ultrices dignissim purus, in tincidunt enim facilisis
      nec. Vivamus et nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio
      lectus. Maecenas sit amet augue varius, facilisis erat sit amet, convallis tellus.
      Proin vel tristique nisl.`,
      },
      title: `Dans le cas d'une mesure d'accompagnement judiciaire`,
    },
  ],
};
