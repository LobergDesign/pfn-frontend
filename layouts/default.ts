import { Vue, Component } from "nuxt-property-decorator";
import { IFooterObject, IMenu } from "~/interfaces/global";
import { globalQuery } from "~/queries/global";
@Component
export default class Default extends Vue {
	public menuData: IMenu = {};
	public footerData: IFooterObject = {};
	async fetch() {
		const response = await this.$nuxt.context.$dataApi.getData(globalQuery);
		const {
			logo,
			mainMenuCollection,
			empowerMind,
			empowerMindText,
			adresse,
			email,
			facebook,
			footerText,
			instagram,
			linkedIn,
			phonenumber,
			youTube,
			zipcodeAndCity,
		} = response.data.globalSettings;
		this.menuData = { mainMenuCollection, logo };
		this.footerData = {
			footerObject: {
				empowerMind,
				empowerMindText,
				adresse,
				email,
				facebook,
				footerText,
				instagram,
				linkedIn,
				phonenumber,
				youTube,
				zipcodeAndCity,
			},
		};
	}
}
