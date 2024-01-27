const provideMap = {};

export default Object.keys(provideMap).map((name) => {
  return {
    name,
    value: provideMap[name],
  };
});
