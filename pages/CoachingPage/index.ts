import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
//@ts-ignore
import { frontpageQueryData } from "~/resources/global";
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { frontpageQuery } from "~/queries/frontpage";

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

	async asyncData({ $dataApi }: Context) {
		const pageData = await $dataApi.getData(frontpageQuery);
		const data = pageData.frontpage;
		return { data };
	}
}
