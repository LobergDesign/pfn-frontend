import { extendRoutes, generate } from "./configUtilities/routes/routes";

export default {
	target: "static",
	loading: false,
	head: {
		title: process.env.npm_package_name || "",
		htmlAttrs: {
			lang: "da_DK",
			amp: true,
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [
			{ rel: "icon", href: "/favicon.ico" },
			{ rel: "icon", type: "image/svg+xml", href: "/icon.svg" },
			{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
		],
	},
	/*
	 ** Global CSS
	 */
	// publicRuntimeConfig: {
	//   baseUrl: process.env.BASE_URL || "https://www.live.site.dk",
	//   graphqlToken: process.env.GRAPHQL_TOKEN
	// },
	// privateRuntimeConfig: {
	//   graphqlToken: process.env.GRAPHQL_TOKEN
	// },
	css: ["~/assets/scss/site.scss"],
	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: ["~/plugins/resources/cms"],

	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ["@nuxt/typescript-build", "nuxt-lazysizes", "nuxt-graphql-request"],
	/*
	 ** Nuxt.js modules
	 */
	modules: ["nuxt-webfontloader", "@nuxtjs/svg"],
	graphql: {
		endpoint: process.env.GRAPHQL_ENDPOINT,
		includeNodeModules: true,
		options: {
			headers: {
				authorization: "Bearer " + process.env.GRAPHQL_TOKEN,
			},
		},
	},
	/*y
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
						enforce: true,
					},
				},
			},
		},
	},
	webfontloader: {
		google: {
			families: ["PT Serif:400,700", "PT Sans:400,700"],
		},
	},

	router: {
		trailingSlash: true,
		linkActiveClass: "is-active",
		extendRoutes: async (routes: any, resolve: (...param: string[]) => Vue) => await extendRoutes(routes, resolve),
	},
	generate: {
		fallback: true,
		crawler: false,
		// exclude pages thats unused
		exclude: [/LecturePage/, /ContactPage/, /ContentPage/, /CoachingPage/],
		routes: async () => await generate(),
	},
	purgeCSS: {
		// whitelist spicific classes
		whitelist: ["is-active"],
		// whitelist spicific classes and all that contains that naming
		whitelistPatterns: [/__layout/, /__nuxt/, /hooper/, /strong/, /b/, /svg/, /ol/],
	},
	pageTransition: {
		name: "fade",
		mode: "out-in",
	},
	lazySizes: {
		extendAssetUrls: {
			img: "data-src",
			source: "data-srcset",
			// Component with custom props
			AppImage: ["source-url", "image-url"],
		},
	},
	components: [
		{ path: "~/components", extensions: ["vue"] },
		{ path: "~/components/gridBlocks", extensions: ["vue"] },
	],
	loaders: {
		ts: {
			silent: true,
		},
	},
};
