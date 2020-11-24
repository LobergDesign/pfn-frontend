import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
//@ts-ignore
import { frontpageQueryData } from "~/resources/global";

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
    const client = context.app.$graphql;
    const data = await frontpageQueryData(client);
    console.debug("data", data);
    return { data };
  }
}
