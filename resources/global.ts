// @ts-ignore
import { frontpageQuery } from "~/queries/frontpage";
interface IGraphQlClient {
  request: Function;
}
export async function frontpageQueryData(graphQlClient: IGraphQlClient) {
  try {
    const pageData = await graphQlClient.request(frontpageQuery);
    return pageData.frontpage;
  } catch (err) {
    console.log(err);
  }
}
