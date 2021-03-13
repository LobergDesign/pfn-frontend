const query = `query {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG") {
      mainMenuCollection {
        items {
          __typename
          ... on ContactPage {
            slug
          }
          ... on CoachingPage {
            slug
          }
          ... on LecturePage {
            slug
          }
          ... on ContentPage {
            slug
          }
        }
      }
  }
   coachingItemCollection {
    items {
      __typename
      slug
    }
  }
}
  `;
export { query };
