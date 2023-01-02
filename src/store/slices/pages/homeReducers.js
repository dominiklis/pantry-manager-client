import { localStorageKeys } from "constantStrings";
import { toggleDisplayAs, toggleSortByName } from "utils";

const homeReducers = {
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
    const value = toggleSortByName(state.home.sortStoragesBy);

    state.home.sortStoragesBy = value;

    localStorage.setItem(
      localStorageKeys.pagesSettings.home.sortStoragesBy,
      value
    );
  },
  setHomeDisplayStoragesAs: (state) => {
    const value = toggleDisplayAs(state.home.displayStoragesAs);

    state.home.displayStoragesAs = value;

    localStorage.setItem(
      localStorageKeys.pagesSettings.home.displayStoragesAs,
      value
    );
  },

  setHomeSortProductsBy: (state, action) => {
    state.home.sortProductsBy = action.payload;

    localStorage.setItem(
      localStorageKeys.pagesSettings.home.sortProductsBy,
      action.payload
    );
  },
  setHomeHighlightProducts: (state, action) => {
    state.home.highlightProducts = action.payload;

    localStorage.setItem(
      localStorageKeys.pagesSettings.home.highlightProducts,
      action.payload
    );
  },
  setHomeFilterProducts: (state, action) => {
    state.home.filterProducts = action.payload;
  },
};

export default homeReducers;
