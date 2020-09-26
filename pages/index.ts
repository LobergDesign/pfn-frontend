import { Vue, Component } from "nuxt-property-decorator";
import { currentPageData } from "~/resources/cms";
@Component({
  name: "Frontpage",
})
export default class Frontpage extends Vue {
  private metaTitle: string = "";
  private metaDesc: string = "";

  head() {
    return {
      title: this.metaTitle,
      meta: [
        { hid: "description", name: "description", content: this.metaDesc },
      ],
    };
  }

  async asyncData() {
    // get all frontpage data
    const pageData: any = await currentPageData("landingpage");
    console.log("frontlskndg", pageData);
    return {pageData};
   
    // - https://stackoverflow.com/questions/45165211/how-to-use-graphql-in-nuxtjs
    // - https://hasura.io/blog/create-nuxt-js-universal-apps-using-graphql-on-postgres/

    // apollo:{
    //   frontpage(id: "6jGasc0cNzWnSTwiMDzwsW") {
    //     title
    //     heroSection {
    //       title
    //       subtitle
    //       bodytext{json}
    //     }
    //   }
    // }
    
  }
}
