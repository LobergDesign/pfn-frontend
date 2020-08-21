import { createClient } from "~/plugins/contentful";
const contentfulClient = createClient();
// get global settings


// get globalPageData
export async function currentPageData(contentType: string) {
  try {
    const data = await contentfulClient.getEntries({
      content_type: contentType,
      include: 3
    });
    return data.items[0].fields;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
}
