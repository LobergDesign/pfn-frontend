import { Context } from "@nuxt/types/app";
import { Vue, Component } from "vue-property-decorator";
import { getDynamicData } from "~/queries/contentPageItem";

@Component
export default class ContentPage extends Vue {
	async asyncData({ $dataApi, app, error }: Context) {
		const routePath = app.context.route.path;
		const response = await $dataApi.getData(getDynamicData(routePath));
		const responseData = response.data?.pageData?.items[0];
		if (!responseData) {
			return error({
				statusCode: response.status,
				message: response.errors,
			});
		}
		return { data: responseData };
	}
}
