const globalQuery = `query {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG") {
    mainMenuCollection {
      items {
        __typename
      }
      items {
        ... on AboutPage {
          slug
          title
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
    empowerMind {
      title,
      description,
      fileName,
      url
    }
    phonenumber,
    email,
    adresse,
    zipcodeAndCity,
    footerText{json},
    facebook,
    linkedIn,
    youTube,
    instagram
  }
}
  `;
export { globalQuery };
