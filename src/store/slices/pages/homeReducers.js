const { sortByValues, displayAs } = require("constantStrings");

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
};

export default homeReducers;
