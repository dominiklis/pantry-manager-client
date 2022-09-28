import settings from "./requests/settings";
import users from "./requests/users";
import storages from "./requests/storages";
import products from "./requests/products";
import collectionOfProducts from "./requests/collectionOfProducts";
import labels from "./requests/labels";
import shoppingLists from "./requests/shoppingLists";
import shoppingListItems from "./requests/shoppingListItems";

const api = {
  settings,
  users,
  storages,
  products,
  collectionOfProducts,
  labels,
  shoppingLists,
  shoppingListItems,
};

export default api;
