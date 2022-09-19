import { createSelector } from "@reduxjs/toolkit";
import { sortByValues, various } from "constantStrings";
import { selectShoppingListItems } from "store/selectors";
import { sortIdsByName } from "utils";

export const makeSelectShoppingListItems = () =>
  createSelector(
    selectShoppingListItems,
    (_, options = {}) => options,
    (items, { shoppingListId, sortBy }) => {
      if (!shoppingListId || shoppingListId === various.noShoppingList)
        shoppingListId = null;

      let results = [];

      results = items.allIds.filter(
        (id) => items.byId[id].shoppingListId === shoppingListId
      );

      sortIdsByName(
        results,
        items.byId,
        "shoppingListItemName",
        sortBy === sortByValues.nameDesc
      );

      return results.map((item) => items.byId[item]);
    }
  );
