import { Vue, Component, Prop } from "nuxt-property-decorator";
import { IFooterObject } from "~/interfaces/global";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
@Component({
	name: "FooterComponent",
})
export default class FooterComponent extends Vue {
	@Prop({ type: Object as () => IFooterObject, required: true })
	readonly footerData!: IFooterObject;
	public data = this.footerData.footerObject;
	mounted(){
		console.debug("sdfsf", this.footerData);
	}
	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
