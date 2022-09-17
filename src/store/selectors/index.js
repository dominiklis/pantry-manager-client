import {
  selectProducts,
  selectStorages,
  selectLabels,
  selectShoppingLists,
  selectShoppingListItems,
} from "./common";
import { makeSelectProducts, makeSelectProductById } from "./products";
import { makeSelectStorages, makeSelectStorageById } from "./storages";
import { makeSelectLabelsDetails } from "store/selectors/labels";
import { makeSelectShoppingLists } from "store/selectors/shoppingLists";
import { makeSelectShoppingListItems } from "store/selectors/shoppingListItems";

export {
  //common
  selectProducts,
  selectStorages,
  selectLabels,
  selectShoppingLists,
  selectShoppingListItems,

  // products
  makeSelectProducts,
  makeSelectProductById,

  // storages
  makeSelectStorages,
  makeSelectStorageById,

  // labels
  makeSelectLabelsDetails,

  // shopping lists
  makeSelectShoppingLists,

  // shopping list items
  makeSelectShoppingListItems,
};
