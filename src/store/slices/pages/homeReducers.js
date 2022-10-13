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
    state.home.sortStoragesBy = toggleSortByName(state.home.sortStoragesBy);
  },
  setHomeDisplayStoragesAs: (state) => {
    state.home.displayStoragesAs = toggleDisplayAs(
      state.home.displayStoragesAs
    );
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
};

export default homeReducers;
