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

	async asyncData({ $dataApi }: Context) {
		const pageData = await $dataApi.getPageData(frontpageQuery);
		const data = pageData;
		return { data };
	}
}
