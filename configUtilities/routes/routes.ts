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
		mainSitemap: mainItems,
		coachingItems: coachItems,
	};
};

export async function extendRoutes(routes: any, resolve: (...param: string[]) => Vue) {
	// api call to sitemap
	const sitemapRoutes: any = [];
	const sitemap = await siteStructure();

	sitemap.mainSitemap.forEach((route: any) => {
		if (route.__typename === "ContentPage") {
		
			sitemapRoutes.push({
				path: "/:slug/",
				component: resolve(`~/pages/ContentPage/_slug.vue`),
				name: route.__typename,
			});
		} 
		else {
	
			sitemapRoutes.push({
				path: `/${route.slug}/`,
				component: resolve(`~/pages/${route.__typename}/index.vue`),
			});
		}
	});
	// genrate dynamic couching pages
	sitemap.coachingItems.forEach(() => {
		sitemapRoutes.push({
			path: "/coaching/:slug/",
			component: resolve("~/pages/CoachingPage/_slug.vue"),
		});
	});
	return [...routes, ...sitemapRoutes];
}

export async function generate() {
	
	const sitemap = await siteStructure();
	const routes: any = [];
	sitemap.mainSitemap.forEach((item: any) => {
		routes.push({
			route: `/${item.slug}/`,
		});
	});
	sitemap.coachingItems.forEach((item: any) => {
		routes.push({
			route: `/coaching/${item.slug}/`,
		});
	});
	return routes;
}
