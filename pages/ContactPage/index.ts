import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
//@ts-ignore
import { frontpageQueryData } from "~/resources/global";
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { pageQuery } from "~/queries/contact";

@Component({
	name: "ContactPage",
})
export default class ContactPage extends Vue {
	head() {
		return {
			title: "ContactPage",
			meta: [{ hid: "description", name: "description", content: "this.metaDesc" }],
		};
	}

	async asyncData({ $dataApi, error }: Context) {
		const response = await $dataApi.getData(pageQuery);
		const responseData = response.data;
		if(!responseData?.contactPage){
			return error({
				statusCode: response.status,
				message: response.errors
			});
		}
		return { data: responseData.contactPage };
	}
}
