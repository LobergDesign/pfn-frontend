const frontpageQuery = `query {
  frontpage(id: "5VyBhlOzhQsJndF2GyhZ5i") {
    title
    subtitle
    image {
      title
      description
      url
    }
  }
}
`;
export { frontpageQuery };
