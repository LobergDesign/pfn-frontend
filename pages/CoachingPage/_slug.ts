
import { Context } from "@nuxt/types/app";
import { Vue, Component } from "vue-property-decorator";
import { getDynamicData } from "~/queries/coachingPageItem";

@Component
export default class CoachingPage extends Vue {
	async asyncData({ $dataApi, app, error, route }: Context) {
		const routePath = app.context.route.path;
		const response = await $dataApi.getData(getDynamicData(routePath));
		console.debug("jjddj", route);
		console.debug("jjddj", app.context.route);
		const responseData = response.data?.pageData?.items[0];
		if (!responseData) {
			return error({
				statusCode: response.status,
				message: response.errors,
			});
		}
		// console.debug("responseData", responseData);
		return { data: responseData };
	}
}
