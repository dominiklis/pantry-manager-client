import { localStorageKeys } from "constantStrings";
import { toggleDisplayAs, toggleSortByName } from "utils";

const storagesReducers = {
  setStoragesSortStoragesBy: (state) => {
    const value = toggleSortByName(state.storages.sortStoragesBy);

    state.storages.sortStoragesBy = value;

    localStorage.setItem(localStorageKeys.pagesSettings.storages.sortBy, value);
  },

  setStoragesDisplayStoragesAs: (state) => {
    const value = toggleDisplayAs(state.storages.displayStoragesAs);

    state.storages.displayStoragesAs = value;

    localStorage.setItem(
      localStorageKeys.pagesSettings.storages.displayAs,
      value
    );
  },
};

export default storagesReducers;
