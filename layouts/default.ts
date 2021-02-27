import { Vue, Component } from "nuxt-property-decorator";
import { IFooterObject } from "~/interfaces/global";
import { globalQuery } from "~/queries/global";
@Component
export default class Default extends Vue {
	public menuData: object[] = [];
	public footerData: IFooterObject = {};

	mounted() {
		console.debug("footerData", this.footerData);
	}
	async fetch() {
		const response = await this.$nuxt.context.$dataApi.getData(globalQuery);
		const {
			mainMenuCollection,
			empowerMind,
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

		this.menuData = mainMenuCollection;

		this.footerData = {
			footerObject: {
				empowerMind,
				adresse,
				email,
				facebook,
				footerText,
				instagram,
				linkedIn,
				phonenumber,
				youTube,
				zipcodeAndCity,
			}
		};
	}
}
