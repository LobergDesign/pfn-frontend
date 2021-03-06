
import { Context } from "@nuxt/types/app";
import { Vue, Component } from "vue-property-decorator";
import { getDynamicData } from "~/queries/coachingPageItem";

@Component
export default class CoachingPage extends Vue {
	async asyncData({ $dataApi, error, route }: Context) {
		const routePath = route.params.slug;
		const variables = { slug: routePath };
		const response = await $dataApi.getDynamicData(getDynamicData, variables);
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
