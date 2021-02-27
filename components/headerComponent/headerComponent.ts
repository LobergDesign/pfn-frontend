import { Vue, Component } from "nuxt-property-decorator";
// import { globalQuery } from "~/queries/global";
@Component({
	name: "headerComponent",
})
export default class HeaderComponent extends Vue {
	public menuItems: object[] = [];

	async fetch() {
		// @ts-ignore
		// const dataApi = this.$root.context.$dataApi;
		// const response = await dataApi.getData(globalQuery);
		// const responseData = response;
		// console.debug("responseData", responseData)
		// this.menuItems = responseData.globalSettings.mainMenuCollection;
	}
}
