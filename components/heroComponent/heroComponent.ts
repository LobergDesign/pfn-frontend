import { Vue, Component, Prop } from "nuxt-property-decorator";
import { IImage } from "~/interfaces/global";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

@Component({
	name: "heroComponent",
})
export default class HeroComponent extends Vue {
	@Prop({ type: Object })
	readonly heroHeadline!: Object;
	@Prop({ type: Object})
	readonly heroBodytext!: Object;
	@Prop({ type: Object as () => IImage })
	readonly heroImage!: IImage;
	@Prop({ type: String || null })
	readonly heroSubtitle: string | null;

	public mounted() {
		console.debug("herosuv", this.heroSubtitle);
	}
	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
