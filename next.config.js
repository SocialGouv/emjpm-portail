const pages = require("./src/constants/pages.json");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "https://incubateur.social.gouv.fr/emjpm-portail" : "",
  exportPathMap: async function() {
    const pathMap = pages.reduce((acc, page) => {
      acc[page.url] = { page: "/[...page]" };
      return acc;
    }, {});

    return {
      ...pathMap,
      "/": { page: "/index" }
    };
  }
};
