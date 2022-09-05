import { selectProducts, selectStorages, selectLabels } from "./common";
import { makeSelectProducts, makeSelectProductById } from "./products";
import { makeSelectStorages, makeSelectStorageById } from "./storages";
import { makeSelectLabelsDetails } from "store/selectors/labels";

export {
  //common
  selectProducts,
  selectStorages,
  selectLabels,

  // products
  makeSelectProducts,
  makeSelectProductById,

  // storages
  makeSelectStorages,
  makeSelectStorageById,

  // labels
  makeSelectLabelsDetails,
};
