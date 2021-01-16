const frontpageQuery = `query {
  frontpage(id: "5VyBhlOzhQsJndF2GyhZ5i") {
    subtitle
    pageHeadline{json}
    image {
      title
      description
      url
    }
    bodytext{
      json
    }
  }
}
`;
export { frontpageQuery };
