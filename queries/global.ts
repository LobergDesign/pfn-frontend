const globalQuery = `query {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG") {
    logo {
      title
      url
    }
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
    empowerMindText
    empowerMind {
      title,
      description,
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
