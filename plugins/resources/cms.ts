import { Context } from "vm";

export default function (ctx: Context, inject: any) {
	async function getData(query: any) {
		const client = ctx.app.$graphql;
		const getData = await client.request(query);
		const data = getData;
		return data;
	}

	// const baseApiUrl = ctx.$config.baseApiUrl;

	// async function getfrontpageData(path: string) {
	// 	// todo change error handlering
	// 	const emptyUrl = () => {
	// 		if (path) {
	// 			return path;
	// 		} else {
	// 			return "";
	// 		}
	// 	};
	// 	const response = await ctx.$axios.get(`https://${baseApiUrl}/api/${baseApiUrl}/${emptyUrl()}`);
	// 	const data = await response.data;
	// 	return data;
	// }

	inject("dataApi", {
		getData,
	});
}
