const query = `query {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG") {
      mainMenuCollection {
        items{__typename}
        items {
          ... on AboutPage {
            slug
          }
          ... on ContactPage {
            slug
          }
          ... on CoachingPage {
            slug
          }
          ... on LecturePage {
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
