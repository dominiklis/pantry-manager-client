export const filterByName = (ids, entities, propertyName, name) => {
  if (!propertyName || !name) return ids;

  return ids.filter((id) =>
    entities[id][propertyName].toUpperCase().includes(name.toUpperCase())
  );
};
