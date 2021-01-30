const frontpageQuery = `query {
  frontpage(id: "5VyBhlOzhQsJndF2GyhZ5i") {
    subtitle
    pageHeadline {
      json
    }
    image {
      title
      description
      url
    }
    bodytext {
      json
    }
    contentAreaCollection {
      items {
        __typename
      }
      items {
        ... on LayoutCoachingBlok {
          title
          subtitle
        }
        ... on LayoutImageArea {
          imagesCollection {
            items {
              title
              description
              url
            }
          }
          fullscreen
        }
        ... on TextAndImageArea {
          title
          subtitle
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
          title
          subtitle
          bodytext {
            json
          }
        }
      }
    }
  }
}
`;
export { frontpageQuery };
