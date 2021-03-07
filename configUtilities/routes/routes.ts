import { GraphQLClient } from "graphql-request";
import { query } from "../../queries/sitemap";
const siteStructure = async () => {
	const endpoint = process.env.GRAPHQL_ENDPOINT as string;
	const token = process.env.GRAPHQL_TOKEN;
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			authorization: "Bearer " + token,
		},
	});
	const data = await graphQLClient.request(query);
	const mainItems = data.globalSettings.mainMenuCollection.items;
	const coachItems = data.coachingItemCollection.items;
	return {
		mainSitemap:mainItems,
		coachingItems: coachItems
	};
};

export async function extendRoutes(routes: any, resolve: (...param: string[]) => Vue) {

	// api call to sitemap
	const sitemapRoutes: any = [];
	const sitemap = await siteStructure();
	sitemap.mainSitemap.forEach((route: any) => {
		sitemapRoutes.push({
			path: `/${route.slug}/`,
			component: resolve(`~/pages/${route.__typename}/index.vue`),
		});
	});
	// genrate dynamig couching pages
	sitemap.coachingItems.forEach((route: any) => {
		console.log("route", route);
		sitemapRoutes.push({
			path: `/coaching/${route.slug}/`,
			component: resolve(`~/pages/CoachingPage/_slug.vue`),
		});
	});


	// return routes with the extended routes to complete router.
	return [...routes, ...sitemapRoutes];
}

export async function generate() {

	const routes: any = [];
	const sitemap = await siteStructure();
	sitemap.mainSitemap.forEach((item: any) => {
		routes.push({
			route: `/${item.slug}/`,
		});
	});

	return routes;
}
