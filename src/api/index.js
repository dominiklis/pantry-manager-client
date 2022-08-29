import settings from "./requests/settings";
import users from "./requests/users";
import storages from "./requests/storages";
import products from "./requests/products";
import labels from "./requests/labels";
import shoppingLists from "./requests/shoppingLists";
import shoppingListItems from "./requests/shoppingListItems";

const api = {
  settings,
  users,
  storages,
  products,
  labels,
  shoppingLists,
  shoppingListItems,
};

export default api;
