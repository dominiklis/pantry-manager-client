import { createSlice } from "@reduxjs/toolkit";
import {
  displayAs,
  sortByValues,
  filterProductsBy,
  highlightProducts,
} from "constantStrings";
import homeReducers from "./homeReducers";
import productsReducers from "./productsReducers";

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
};

const appSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    ...homeReducers,
    ...productsReducers,
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
} = appSlice.actions;
