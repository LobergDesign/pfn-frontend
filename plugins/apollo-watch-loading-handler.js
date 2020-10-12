export default (isLoading, countModifier, nuxtContext, loading) => {
  loading += countModifier;
  console.debug("Global loading", loading, countModifier);
};
