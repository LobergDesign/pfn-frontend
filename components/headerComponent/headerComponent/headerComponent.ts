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
		const globalData = await dataApi.getData(menuQuery);
                const data = globalData;
                console.debug("data", data.globalSettings.mainMenuCollection);
		this.menuItems = data.globalSettings.mainMenuCollection;
	}
}
