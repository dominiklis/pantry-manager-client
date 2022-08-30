const normalizeArrayState = (array, idPropertyName) => {
  const byId = {};
  const allIds = [];

  array.forEach((item) => {
    byId[item[idPropertyName]] = item;
    allIds.push(item[idPropertyName]);
  });

  return [byId, allIds];
};

export default normalizeArrayState;
