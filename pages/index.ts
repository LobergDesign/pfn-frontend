import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
//@ts-ignore
import { frontpageQueryData } from "~/resources/global";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

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
    const bodytext = documentToHtmlString(data.bodytext?.json);

    return { data, bodytext };
  }
}
