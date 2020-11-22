// @ts-ignore
import {frontpageQuery} from "~/queries/frontpage";
interface IGraphQlClient {
    request: Function;
  }
export async function GetFrontpage(graphQlClient: IGraphQlClient) {
    try {
        const page = await graphQlClient.request(frontpageQuery);
        return page.frontpage;
    } catch (err) {
        console.log(err);
    }
}