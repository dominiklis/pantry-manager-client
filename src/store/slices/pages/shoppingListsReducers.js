import { sortByValues } from "constantStrings";

const shoppingListsReducers = {
  setShoppingListsSortListsBy: (state) => {
    if (state.shoppingLists.sortListsByName === sortByValues.nameAsc)
      state.shoppingLists.sortListsByName = sortByValues.nameDesc;
    else state.shoppingLists.sortListsByName = sortByValues.nameAsc;
  },
};

export default shoppingListsReducers;
