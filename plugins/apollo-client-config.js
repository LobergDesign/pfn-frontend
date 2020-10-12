export default (context) => {
  console.log("context yes", context)
    return {
      httpEndpoint:
        "https://graphql.contentful.com/content/v1/spaces/nriyvl1sdzam",
        
  
      /*
       * For permanent authentication provide `getAuth` function.
       * The string returned will be used in all requests as authorization header
       */
      
      getAuth: () => "Bearer 8Xswc4xPm5COXCCYlwplgx0AruGKaJGYr-u1LSwsJVY",
      
    };
  };
  