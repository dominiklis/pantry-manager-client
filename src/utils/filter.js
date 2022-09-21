export const filterIdsByName = (ids, entities, propertyName, name) => {
  if (!propertyName || !name) return ids;

  return ids.filter((id) =>
    entities[id][propertyName].toUpperCase().includes(name.toUpperCase())
  );
};

export const filterByName = (items, propertyName, name) => {
  if (!propertyName || !name) return items;

  return items.filter((storage) => {
    if (storage.storageName.toUpperCase().includes(name.toUpperCase()))
      return storage;

    return null;
  });
};
