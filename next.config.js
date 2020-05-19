const isProd = process.env.NODE_ENV === "production";
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  assetPrefix: isProd ? "https://socialgouv.github.io/emjpm-portail" : "",
  pageExtensions: ["js", "jsx", "md", "mdx"],
  publicRuntimeConfig: {
    appUrl: isProd ? "https://socialgouv.github.io/emjpm-portail" : "http://localhost:3000",
  },
});
