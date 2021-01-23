import { Context } from "vm";
export default async function (ctx: Context) {
	const client = ctx.app.$graphql;
	const getData = await client.request();
	const data = getData;
	return data;
}
