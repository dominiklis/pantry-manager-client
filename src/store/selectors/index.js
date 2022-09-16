import {
  selectProducts,
  selectStorages,
  selectLabels,
  selectShoppingLists,
} from "./common";
import { makeSelectProducts, makeSelectProductById } from "./products";
import { makeSelectStorages, makeSelectStorageById } from "./storages";
import { makeSelectLabelsDetails } from "store/selectors/labels";
import { makeSelectShoppingLists } from "store/selectors/shoppingLists";

export {
  //common
  selectProducts,
  selectStorages,
  selectLabels,
  selectShoppingLists,

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
};
