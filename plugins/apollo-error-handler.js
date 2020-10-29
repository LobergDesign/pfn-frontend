export default (
  { graphQLErrors, networkError, operation, forward },
  nuxtContext
) => {
  console.log("Global error handler");
  console.log(
    "from error handler",
    graphQLErrors,
    networkError,
    operation,
    forward
  );
};
