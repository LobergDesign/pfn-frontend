import { Vue, Component,Prop } from "nuxt-property-decorator";
@Component({
	name: "TextBlock",
})
export default class TextBlock extends Vue {
	@Prop({ type: Object })
	readonly blockData!: Object | undefined;

	mounted(){
		console.debug("gridCondtent", this.blockData);
	}
}
