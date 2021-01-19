const sitemap = require("nextjs-sitemap-generator");

sitemap({
  alternateUrls: {},
  baseUrl: "https://pjm.social.gouv.fr",
  extraPaths: [],
  ignoredExtensions: ["png", "jpg"],
  ignoredPaths: [],
  nextConfigPath: __dirname + "/next.config.js",
  pagesConfig: {},
  pagesDirectory: __dirname + "/src/pages",
  sitemapFilename: "sitemap.xml",
  sitemapStylesheet: [],
  targetDirectory: "public/",
});
