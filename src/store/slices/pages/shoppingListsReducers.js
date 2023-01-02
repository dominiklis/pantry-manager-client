import { localStorageKeys } from "constantStrings";
import { toggleSortByName } from "utils";

const shoppingListsReducers = {
  setShoppingListsSortListsBy: (state) => {
    const value = toggleSortByName(state.shoppingLists.sortListsByName);

    state.shoppingLists.sortListsByName = value;

    localStorage.setItem(
      localStorageKeys.pagesSettings.shoppingLists.sortBy,
      value
    );
  },
};

export default shoppingListsReducers;
