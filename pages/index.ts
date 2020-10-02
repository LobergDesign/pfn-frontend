import { Vue, Component } from "nuxt-property-decorator";
// import { currentPageData } from "~/resources/cms";

import frontpageData from "~/queries/frontpage.gql";
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

  apollo!: {
    frontpageData: {
      prefetch: true,
      query: typeof frontpageData
    }
  }
  async asyncData({ app }: any) {
    console.log("frontpafgs", frontpageData);
    // get all frontpage data
    // const pageData: any = await currentPageData("landingpage");
    // console.log("frontlskndg", pageData);
    // return {pageData};

    // - https://stackoverflow.com/questions/45165211/how-to-use-graphql-in-nuxtjs
    // - https://hasura.io/blog/create-nuxt-js-universal-apps-using-graphql-on-postgres/

    
    const client = app.apolloProvider.defaultClient;
    console.debug("clifents", client);
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
