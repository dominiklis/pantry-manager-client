import { createSlice } from "@reduxjs/toolkit";
import {
  displayAs,
  sortByValues,
  filterProductsBy,
  highlightProducts,
} from "constantStrings";
import {
  homeReducers,
  productsReducers,
  storagesReducers,
} from "store/slices/pages";

const initialState = {
  home: {
    showExpired: true,
    showCloseToExpiry: true,
    sortStoragesBy: sortByValues.nameAsc,
    displayStoragesAs: displayAs.list,
    sortProductsBy: sortByValues.nameAsc,
    highlightProducts: highlightProducts.none,
    filterProducts: filterProductsBy.all,
  },
  products: {
    sortProductsBy: sortByValues.nameAsc,
    highlightProducts: highlightProducts.none,
    filterProducts: filterProductsBy.all,
  },
  storages: {
    sortStoragesBy: sortByValues.nameAsc,
    displayStoragesAs: displayAs.list,
  },
};

const appSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    ...homeReducers,
    ...productsReducers,
    ...storagesReducers,
  },
});

export default appSlice.reducer;

export const {
  setHomeShowExpired,
  setHomeShowCloseToExpiry,
  setHomeSortStoragesBy,
  setHomeDisplayStoragesAs,
  setHomeSortProductsBy,
  setHomeHighlightProducts,
  setHomeFilterProducts,

  setProductsSortProductsBy,
  setProductsHighlightProducts,
  setProductsFilterProducts,

  setStoragesSortStoragesBy,
  setStoragesDisplayStoragesAs,
} = appSlice.actions;
