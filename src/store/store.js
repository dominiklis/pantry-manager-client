import { configureStore } from "@reduxjs/toolkit";
import {
  appReducer,
  usersReducer,
  storagesReducer,
  productsReducer,
  labelsReducer,
  shoppingListsReducer,
  shoppingListItemsReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    app: appReducer,
    users: usersReducer,
    storages: storagesReducer,
    products: productsReducer,
    labels: labelsReducer,
    shoppingLists: shoppingListsReducer,
    shoppingListItems: shoppingListItemsReducer,
  },
});
