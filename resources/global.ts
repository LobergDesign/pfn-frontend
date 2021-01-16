// // @ts-ignore
// import { frontpageQuery } from "~/queries/frontpage";
// import { IHero, IGraphQlClient } from "~/interfaces/global";

// // hero data
// const hero = (data: IHero) => {
//   const object:IHero = {
//     pageHeadline: data.pageHeadline,
//     bodytext: data.bodytext,
//     image: data.image,
//     subtitle: data.subtitle
//   }
//   return object;
// }



// export async function frontpageQueryData(graphQlClient: IGraphQlClient) {
//   try {
//     const pageData = await graphQlClient.request(frontpageQuery);
//     const pageDataObject = pageData.frontpage;
//     const heroData = hero(pageData.frontpage);

//     return {pageDataObject, heroData};
//   } catch (err) {
//     console.log(err);
//   }
// }
