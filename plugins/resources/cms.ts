// import { Context } from "vm";

// export default function (ctx: Context, inject: any) {
// 	async function getData(query: any) {
// 		const client = ctx.app.$graphql;
// 		const getData = await client.request(query);
// 		const data = getData;
// 		return data;
// 	}

// 	// const baseApiUrl = ctx.$config.baseApiUrl;

// 	// async function getfrontpageData(path: string) {
// 	// 	// todo change error handlering
// 	// 	const emptyUrl = () => {
// 	// 		if (path) {
// 	// 			return path;
// 	// 		} else {
// 	// 			return "";
// 	// 		}
// 	// 	};
// 	// 	const response = await ctx.$axios.get(`https://${baseApiUrl}/api/${baseApiUrl}/${emptyUrl()}`);
// 	// 	const data = await response.data;
// 	// 	return data;
// 	// }

// 	inject("dataApi", {
// 		getData,
// 	});
// }

import { Context } from "vm";

export default function (ctx: Context, inject: any) {
	// get data funciton with query paramater
	async function getData(query: any) {
		const client = ctx.app.$graphql;
		return handleResponse(await client.request(query));
	}

	// create response function to handle errors
	async function handleResponse(response: any) {
		const data = await response;
		 console.log("response from handæle", response);
		const {errors, status, extensions} = response;
		return { 
			data,
			errors,
			status,
			extensions
		};
	}

	// inject get data as dataApi to use in app as this.$dataApi
	inject("dataApi", {
		getData,
	});
}
