import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
//@ts-ignore
import { frontpageQueryData } from "~/resources/global";
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { pageQuery } from "~/queries/coaching";

@Component({
	name: "CoachingPage",
})
export default class CoachingPage extends Vue {
	head() {
		return {
			title: "Coaching",
			meta: [{ hid: "description", name: "description", content: "this.metaDesc" }],
		};
	}

	async asyncData({ $dataApi, error }: Context) {
		const response = await $dataApi.getData(pageQuery);
		const responseData = response.data;
		if(!responseData?.coachingPage){
			return error({
				statusCode: response.status,
				message: response.errors
			});
		}
		return { data: responseData.coachingPage };
	}
}
