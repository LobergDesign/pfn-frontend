import { GraphQLClient } from "graphql-request";
import { menuQuery } from "../../queries/global";
const siteStructure = async () => {
	const endpoint = process.env.GRAPHQL_ENDPOINT as string;
	const token = process.env.GRAPHQL_TOKEN;
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			authorization: "Bearer " + token,
		},
	});
	const data = await graphQLClient.request(menuQuery);
	const dataResponse = data.globalSettings.mainMenuCollection;

	return dataResponse.items;
};

export async function extendRoutes(routes: any, resolve: (...param: string[]) => Vue) {

	// api call to sitemap
	// model:  For pagetype (used to find component from pages)
	// name:   Best practice to use name in component routes
	// path:   Use to create the path of the route

	// collection of all extended routes used for return in end of function.
	const sitemapRoutes: any = [];
	const sitemap = await siteStructure();
	sitemap.forEach((route: any) => {
		// console.log("route", route);

		sitemapRoutes.push({
			path: `/${route.slug}/`,
			component: resolve(`~/pages/${route.__typename}/index.vue`),
		});
	});

	// return routes with the extended routes to complete router.
	return [...routes, ...sitemapRoutes];
}

export async function generate() {
	// summary sitemap route for generate
	// model: path to create sub page
	// parent: to render the correct url and component (parent to the page type) eg. /{parent}/article-1

	const routes: any = [];
	const sitemap = await siteStructure();
	sitemap.forEach((item: any) => {
		// console.log("item", item);
		routes.push({
			route: `/${item.slug}/`,
		});
	});

	return routes;
}
