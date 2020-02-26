const pages = require("./src/constants/pages.json");

module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
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
