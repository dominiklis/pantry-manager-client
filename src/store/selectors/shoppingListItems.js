import { createSelector } from "@reduxjs/toolkit";
import { sortByValues, various } from "constantStrings";
import { selectShoppingListItems } from "store/selectors";
import { filterByName, sortIdsByName } from "utils";

export const makeSelectShoppingListItems = () =>
  createSelector(
    selectShoppingListItems,
    (_, options) => options,
    (items, { shoppingListId, sortBy, search } = {}) => {
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

      results = results.map((item) => items.byId[item]);

      if (search) {
        results = filterByName(results, "shoppingListItemName", search);
      } else if (search === "") return [];

      return results;
    }
  );
