require("dotenv").config();
const config = require("./.contentful.json");
// graph playground - https://graphql.contentful.com/content/v1/spaces/nriyvl1sdzam/explore?access_token=8Xswc4xPm5COXCCYlwplgx0AruGKaJGYr-u1LSwsJVY
export default {
  target: "static",
  loading: false,
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["@/assets/scss/site.scss"],
  plugins: ["~/plugins/contentful"],
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/dotenv"],
  webfontloader: {
    google: {
      families: ["Open Sans:n3,n4", "Roboto:n3,n7"],
      urls: [
        // for each Google Fonts add url + options you want
        // here add font-display option
        "https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap",
        "https://fonts.googleapis.com/css?family=Roboto:300,700&display=swap",
      ],
    },
  },
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT,
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-webfontloader", "@nuxtjs/apollo"],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://graphql.contentful.com",
        getAuth: () => "8Xswc4xPm5COXCCYlwplgx0AruGKaJGYr-u1LSwsJVY",
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    babel: {
      presets({ isServer }: any) {
        return [["@nuxt/babel-preset-app", { loose: true }]];
      },
    },
  },
};
