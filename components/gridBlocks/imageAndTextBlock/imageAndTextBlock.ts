import { Vue, Component,Prop } from "nuxt-property-decorator";
@Component({
	name: "ImageAndTextBlock",
})
export default class ImageAndTextBlock extends Vue {
	@Prop({ type: Object })
	readonly blockData!: Object | undefined;

	mounted(){
		console.debug("gridCondtent", this.blockData);
	}
}
