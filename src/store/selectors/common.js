const selectProducts = (state) => state.products;
const selectStorages = (state) => state.storages;
const selectLabels = (state) => state.labels;
const selectShoppingLists = (state) => state.shoppingLists;
const selectShoppingListItems = (state) => state.shoppingListItems;

export {
  selectProducts,
  selectStorages,
  selectLabels,
  selectShoppingLists,
  selectShoppingListItems,
};
