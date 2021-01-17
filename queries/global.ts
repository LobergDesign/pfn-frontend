const menuQuery = `query {
    globalSettings(id: "38onI8GbhsFteNr1exH4HG") {
        mainMenuCollection {
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
  }
  `;
export { menuQuery };
