const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "https://incubateur.social.gouv.fr/emjpm-portail" : "",
  publicRuntimeConfig: {
    appUrl: isProd ? "http://socialgouv.github.io/emjpm-portail" : "http://localhost:3000"
  }
};
