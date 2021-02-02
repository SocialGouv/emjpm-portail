const isProd = process.env.NODE_ENV === "production";
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  assetPrefix: isProd ? "https://pjm.social.gouv.fr" : "",
  pageExtensions: ["js", "jsx", "md", "mdx"],
  publicRuntimeConfig: {
    appUrl: isProd ? "https://pjm.social.gouv.fr" : "http://localhost:3001",
  },
});
