const { sortByValues, displayAs } = require("constantStrings");

const storagesReducers = {
  setStoragesSortStoragesBy: (state) => {
    if (state.storages.sortStoragesBy === sortByValues.nameAsc)
      state.storages.sortStoragesBy = sortByValues.nameDesc;
    else state.storages.sortStoragesBy = sortByValues.nameAsc;
  },
  setStoragesDisplayStoragesAs: (state) => {
    if (state.storages.displayStoragesAs === displayAs.grid)
      state.storages.displayStoragesAs = displayAs.list;
    else state.storages.displayStoragesAs = displayAs.grid;
  },
};

export default storagesReducers;
