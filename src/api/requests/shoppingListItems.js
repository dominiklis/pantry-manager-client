import requests from "../axios";

const shoppingListItems = {
  get: () => requests.get("/shopping-lists-items"),
  create: (shoppingListItemName, quantity, shoppingListId) =>
    requests.post("/shopping-lists-items", {
      shoppingListItemName,
      quantity,
      shoppingListId,
    }),
  edit: (
    shoppingListItemId,
    shoppingListItemName,
    quantity,
    shoppingListId,
    selected
  ) =>
    requests.put(`/shopping-lists-items/${shoppingListItemId}`, {
      shoppingListItemName,
      quantity,
      shoppingListId,
      selected,
    }),
  delete: (shoppingListItemId) =>
    requests.delete(`/shopping-lists-items/${shoppingListItemId}`),
};

export default shoppingListItems;
