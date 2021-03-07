const query = `query {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG") {
      mainMenuCollection {
        items{__typename}
        items {
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
      slug
    }
  }
}
  `;
export { query };
