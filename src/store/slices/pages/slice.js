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
  labelsReducers,
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
  labels: {
    sortLabelsBy: sortByValues.nameAsc,
    displayLabelsAs: displayAs.grid,
  },
};

const appSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    ...homeReducers,
    ...productsReducers,
    ...storagesReducers,
    ...labelsReducers,
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

  setLabelsSortLabelsBy,
  setLabelsDisplayLabelsAs,
} = appSlice.actions;
