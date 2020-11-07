//@ts-ignore
import frontpage from "~/queries/frontpage";

interface IApolloClient {
  query: Function;
}
interface ITest {
  query: Function;
}

export async function frontpageData(apolloClient:IApolloClient) {

  try {
    const data = await apolloClient.query({
      query: frontpage,
    });
    return data.data.frontpage;
  } catch (err) {
    console.log(err);
  }
}
