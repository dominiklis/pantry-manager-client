export const sortIdsByName = (ids, byId, propertyName, desc = false) => {
  return ids.sort((a, b) => {
    const aName = byId[a][propertyName]?.toUpperCase();
    const bName = byId[b][propertyName]?.toUpperCase();

    if (desc) return aName < bName ? 1 : aName > bName ? -1 : 0;

    return aName > bName ? 1 : aName < bName ? -1 : 0;
  });
};

export const sortByExpDate = (ids, byId, desc = true) => {
  return ids.sort((a, b) => {
    if (desc)
      return (
        new Date(byId[a].expirationDate) - new Date(byId[b].expirationDate)
      );

    return new Date(byId[b].expirationDate) - new Date(byId[a].expirationDate);
  });
};

export const sortByName = (array, propertyName, desc = false) => {
  return array.sort((a, b) => {
    const aName = a[propertyName]?.toUpperCase();
    const bName = b[propertyName]?.toUpperCase();

    if (desc) return aName < bName ? 1 : aName > bName ? -1 : 0;

    return aName > bName ? 1 : aName < bName ? -1 : 0;
  });
};
