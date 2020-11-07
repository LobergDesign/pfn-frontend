
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
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build"],
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
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-webfontloader", "@nuxtjs/apollo"],
  apollo: {
    clientConfigs: {
      default: "~/plugins/apollo-client-config.js",
    },

    // setup a global error handler
    errorHandler: "~/plugins/apollo-error-handler.js",
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    cssSourceMap: false,
    // analyze: {
    //   analyzerMode: "static",
    // },
    extractCSS: true,
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.(css|vue)$/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    babel: {
      presets({ isServer }: any) {
        return [["@nuxt/babel-preset-app", { loose: true }]];
      },
    },
  },
};
