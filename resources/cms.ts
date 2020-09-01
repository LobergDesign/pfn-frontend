import { createClient } from "~/plugins/contentful";
const contentfulClient = createClient();


// get globalPageData
export async function currentPageData(contentType: string) {
  try {
    const data = await contentfulClient.getEntries({
      content_type: contentType
    });
    return data.items[0].fields;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
}
