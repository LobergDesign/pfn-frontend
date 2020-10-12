import { Vue, Component } from "nuxt-property-decorator";
// import { currentPageData } from "~/resources/cms";
//@ts-ignore
import frontpage from "~/queries/frontpage";

import gql from "graphql-tag";

@Component({
  name: "Frontpage",
})
export default class Frontpage extends Vue {
  private metaTitle: string = "";
  private metaDesc: string = "";
  public frontpageData: [] = [];
  head() {
    return {
      title: this.metaTitle,
      meta: [
        { hid: "description", name: "description", content: this.metaDesc },
      ],
    };
  }
  // apollo!: {
  //   frontpageDatas: {
  //     prefetch: true,
  //     query: frontpageData
  //   }
  // }

  // apollo:{
  //   frontpageData: ´
  // }
  mounted() {
    console.log("frontpages", frontpage);
    const yes = gql`
      query frontpage {
        frontpage(id: "6jGasc0cNzWnSTwiMDzwsW") {
          title
          heroSection {
            title
            subtitle
          }
        }
      }
    `;
    console.log("ascs git yes", yes);
  }
    //@ts-ignore
  apollo: {
    frontpage: {
      prefetch: true;
      //@ts-ignore
      query: frontpage;
    };
  };
  async asyncData(context: any) {
//     console.log("frontpafgss sgrapshQls", frontpageData);
//     const clientContent = context.app.apolloProvider.defaultClient;
// const test = frontpageData;
//     console.debug("clientCoadantsents", clientContent);
//     const pageData: any = await currentPageData("landingpage");
//     return { pageData, test };

    // - https://stackoverflow.com/questions/45165211/how-to-use-graphql-in-nuxtjs
    // - https://hasura.io/blog/create-nuxt-js-universal-apps-using-graphql-on-postgres/

    // const client = app.apolloProvider.defaultClient;
    // console.debug("clifents", client);
    // console.debug("app", app.apolloProvider.clients.defaultClient);

    // const pageData = await client
    //   .query({
    //     query: gql`
    //       {
    //         frontpage {
    //           title
    //         }
    //       }
    //     `,
    //   })
    //   .then(({ data }: any) => data && data.pageData);
    // return { pageData };
  }
}
