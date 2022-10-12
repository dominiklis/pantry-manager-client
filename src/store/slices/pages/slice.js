import { createSlice } from "@reduxjs/toolkit";
import {
  displayAs,
  sortByValues,
  filterProductsBy,
  highlightProducts,
} from "constantStrings";

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
};

const appSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setHomeShowExpired: (state, action) => {
      if (action.payload === null)
        state.home.showExpired = !state.home.showExpired;
      else state.home.showExpired = action.payload;
    },
    setHomeShowCloseToExpiry: (state, action) => {
      if (action.payload === null)
        state.home.showCloseToExpiry = !state.home.showCloseToExpiry;
      else state.home.showCloseToExpiry = action.payload;
    },

    setHomeSortStoragesBy: (state) => {
      if (state.home.sortStoragesBy === sortByValues.nameAsc)
        state.home.sortStoragesBy = sortByValues.nameDesc;
      else state.home.sortStoragesBy = sortByValues.nameAsc;
    },
    setHomeDisplayStoragesAs: (state) => {
      if (state.home.displayStoragesAs === displayAs.grid)
        state.home.displayStoragesAs = displayAs.list;
      else state.home.displayStoragesAs = displayAs.grid;
    },

    setHomeSortProductsBy: (state, action) => {
      state.home.sortProductsBy = action.payload;
    },
    setHomeHighlightProducts: (state, action) => {
      state.home.highlightProducts = action.payload;
    },
    setHomeFilterProducts: (state, action) => {
      state.home.filterProducts = action.payload;
    },
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
} = appSlice.actions;
