import { toggleSortByName } from "utils";

const shoppingListsReducers = {
  setShoppingListsSortListsBy: (state) => {
    state.shoppingLists.sortListsByName = toggleSortByName(
      state.shoppingLists.sortListsByName
    );
  },
};

export default shoppingListsReducers;
