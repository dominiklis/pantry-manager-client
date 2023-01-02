import { createSlice } from "@reduxjs/toolkit";
import {
  displayAs,
  sortByValues,
  filterProductsBy,
  highlightProducts,
  localStorageKeys,
} from "constantStrings";
import {
  homeReducers,
  productsReducers,
  storagesReducers,
  labelsReducers,
  shoppingListsReducers,
} from "store/slices/pages";

const initialState = {
  home: {
    showExpired: true,
    showCloseToExpiry: true,
    sortStoragesBy:
      localStorage.getItem(
        localStorageKeys.pagesSettings.home.sortStoragesBy
      ) ?? sortByValues.nameAsc,
    displayStoragesAs:
      localStorage.getItem(
        localStorageKeys.pagesSettings.home.displayStoragesAs
      ) ?? displayAs.list,
    sortProductsBy:
      localStorage.getItem(
        localStorageKeys.pagesSettings.home.sortProductsBy
      ) ?? sortByValues.nameAsc,
    highlightProducts:
      localStorage.getItem(
        localStorageKeys.pagesSettings.home.highlightProducts
      ) ?? highlightProducts.none,
    filterProducts: filterProductsBy.all,
  },
  products: {
    sortProductsBy:
      localStorage.getItem(localStorageKeys.pagesSettings.products.sortBy) ??
      sortByValues.nameAsc,
    highlightProducts:
      localStorage.getItem(localStorageKeys.pagesSettings.products.highlight) ??
      highlightProducts.none,
    filterProducts: filterProductsBy.all,
  },
  storages: {
    sortStoragesBy:
      localStorage.getItem(localStorageKeys.pagesSettings.storages.sortBy) ??
      sortByValues.nameAsc,
    displayStoragesAs:
      localStorage.getItem(localStorageKeys.pagesSettings.storages.displayAs) ??
      displayAs.list,
  },
  labels: {
    sortLabelsBy:
      localStorage.getItem(localStorageKeys.pagesSettings.labels.sortBy) ??
      sortByValues.nameAsc,
    displayLabelsAs:
      localStorage.getItem(localStorageKeys.pagesSettings.labels.displayAs) ??
      displayAs.grid,
  },
  shoppingLists: {
    sortListsByName:
      localStorage.getItem(
        localStorageKeys.pagesSettings.shoppingLists.sortBy
      ) ?? sortByValues.nameAsc,
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
    ...shoppingListsReducers,
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

  setShoppingListsSortListsBy,
} = appSlice.actions;
