import { Vue, Component,Prop } from "nuxt-property-decorator";
@Component({
	name: "CoachingBlock",
})
export default class CoachingBlock extends Vue {
	@Prop({ type: Object })
	readonly blockData!: Object | undefined;

	mounted(){
		console.debug("gridCondtent", this.blockData);
	}
}
