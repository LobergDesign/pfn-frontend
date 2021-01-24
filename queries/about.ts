const pageQuery = `query {
  aboutPage(id: "5yspWLUmfnjWPdIvKA51q8") {
    pageHeadline{json}
    subtitle
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
export { pageQuery };
