import { Vue, Component, Prop } from "nuxt-property-decorator";
import { IHero } from "~/types/global";

@Component({
    name: "heroComponent"
})
export default class HeroComponent extends Vue {
  @Prop() heroContent!: IHero;

  public title = this.heroContent.title;
  public subtitle = this.heroContent.subtitle;
  public bodytext = this.heroContent.bodytext;
  public image = this.heroContent.image;

mounted(){
    console.debug("this.hero", this.heroContent);
}

}
