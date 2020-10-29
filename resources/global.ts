//@ts-ignore
import frontpage from "~/queries/getFrontpage";
// intro data function
export function setIntroData(apolloClient: any) {
  return apolloClient.query({ query: frontpage }).then(({ response }: any) => {
    const data = response.frontpage;
    return data;
  });
}
