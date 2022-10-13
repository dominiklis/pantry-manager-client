import { toggleDisplayAs, toggleSortByName } from "utils";

const storagesReducers = {
  setStoragesSortStoragesBy: (state) => {
    state.storages.sortStoragesBy = toggleSortByName(
      state.storages.sortStoragesBy
    );
  },
  setStoragesDisplayStoragesAs: (state) => {
    state.storages.displayStoragesAs = toggleDisplayAs(
      state.storages.displayStoragesAs
    );
  },
};

export default storagesReducers;
