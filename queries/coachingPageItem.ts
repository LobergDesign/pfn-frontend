// @ts-ignore
export function getDynamicData(slug: string) {
	return `
  query getCoachingPage($slug: String){
    pageData: coachingItemCollection(where: { slug: $slug }, limit:20) {
      items {
        pageHeadline {
          json
        }
        subtitle
        bodytext {
          json
        }
        image {
          title
          description
          url
        }
        coachingProcessTitle {
          json
        }
        coachingProcessCollection(limit:20) {
          items {
            headline
            bodytext {
              json
            }
            image {
              title
              description
              url
            }
          }
        }
        contentAreaCollection(limit: 20) {
          items {
            __typename
            ... on LayoutCoachingBlok {
              title
              subtitle
            }
            ... on LayoutImageArea {
              imagesCollection(limit:5) {
                items {
                  title
                  description
                  url
                }
              }
              fullscreen
            }
            ... on TextAndImageArea {
              label
              bodytext {
                json
              }
              image {
                title
                description
                url
              }
            }
            ... on LayoutTextArea {
              bodytext {
                json
              }
            }
          }
        }
        seoSection {
          metaTitle
          metaDescription
          metaOgtitle
          metaOgtype
          metaOgurl
          metaOgimage {
            title
            url
          }
        }
      }
    }
  }
  `;
}
