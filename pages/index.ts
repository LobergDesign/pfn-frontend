import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
//@ts-ignore
import { setIntroData } from "~/resources/global";

@Component({
  name: "Frontpage",
})
export default class Frontpage extends Vue {

  head() {
    return {
      title: "frontpage",
      meta: [
        { hid: "description", name: "description", content: "this.metaDesc" },
      ],
    };
  }
  async asyncData(context: Context) {
    const client = context.app.apolloProvider.defaultClient;
    const helloe = await setIntroData(client);
    return { helloe };
  }
}
