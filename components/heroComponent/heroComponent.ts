import { Vue, Component, Prop } from "nuxt-property-decorator";
import { IImage } from "~/interfaces/global";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

@Component({
	name: "heroComponent",
})
export default class HeroComponent extends Vue {
	@Prop({ type: Object, required: true })
	readonly heroHeadline!: Object;
	@Prop({ type: Object, required: true })
	readonly heroBodytext!: Object;
	@Prop({ type: Object as () => IImage, required: true })
	readonly heroImage!: IImage;
	@Prop({ type: String, required: true })
	readonly heroSubtitle!: String;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
