import { Vue, Component, Prop } from "nuxt-property-decorator";
import { IMenu } from "~/interfaces/global";
@Component({
	name: "headerComponent",
})
export default class HeaderComponent extends Vue {
	@Prop({ type: Object as () => IMenu, required: true })
	readonly menuData!: IMenu;
}
