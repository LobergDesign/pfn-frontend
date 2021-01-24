import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
//@ts-ignore
import { frontpageQueryData } from "~/resources/global";
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { frontpageQuery } from "~/queries/frontpage";

@Component({
	name: "Frontpage",
})
export default class FrontpageClass extends Vue {
	head() {
		return {
			title: "frontpage",
			meta: [{ hid: "description", name: "description", content: "this.metaDesc" }],
		};
	}

	async asyncData({ $dataApi, error }: Context) {
		const response = await $dataApi.getData(frontpageQuery);
		const responseData = response.data;

		const check = response.data.frontpage ? "yes": "no";
		console.debug("chedckd", check);
		if(!responseData.frontpage){

			return error({
				statusCode: response.status,
				message: response.statusText
			});
		}

		console.debug("daddsta", responseData);
		return { data: responseData.frontpage };
	}
}
