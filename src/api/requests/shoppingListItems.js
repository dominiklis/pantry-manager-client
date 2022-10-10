import requests from "../axios";

const shoppingListItems = {
  get: () => requests.get("/shopping-lists-items"),
  create: (shoppingListItemName, amount, shoppingListId) =>
    requests.post("/shopping-lists-items", {
      shoppingListItemName,
      amount,
      shoppingListId,
    }),
  edit: (
    shoppingListItemId,
    shoppingListItemName,
    amount,
    shoppingListId,
    selected
  ) =>
    requests.put(`/shopping-lists-items/${shoppingListItemId}`, {
      shoppingListItemName,
      amount,
      shoppingListId,
      selected,
    }),
  delete: (shoppingListItemId) =>
    requests.delete(`/shopping-lists-items/${shoppingListItemId}`),
};

export default shoppingListItems;
