import { Vue, Component } from "nuxt-property-decorator";
import { menuQuery } from "~/queries/global";
@Component({
	name: "headerComponent",
})
export default class HeaderComponent extends Vue {
	public menuItems: object[] = [];

	async fetch() {
		// @ts-ignore
		const dataApi = this.$root.context.$dataApi;
		const response = await dataApi.getData(menuQuery);
		const responseData = response.data;
		this.menuItems = responseData.globalSettings.mainMenuCollection;
	}
}
