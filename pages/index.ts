import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
//@ts-ignore
import { frontpageData } from "~/resources/global";
interface ITest {
  query: Function;
}
@Component({
  name: "Frontpage",
})
export default class FrontpageClass extends Vue {
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
    const data:ITest | undefined = await frontpageData(client);
    console.debug("dasdta", typeof client.query);
    return { data };
  }
}
