import { createSelector } from "@reduxjs/toolkit";
import { sortByValues } from "constantStrings";
import { selectShoppingListItems } from "store/selectors";
import { sortIdsByName } from "utils";

export const makeSelectShoppingListItems = () =>
  createSelector(
    selectShoppingListItems,
    (_, shoppingListId) => shoppingListId,
    (items, { shoppingListId, sortBy } = {}) => {
      if (!shoppingListId) shoppingListId = null;

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
