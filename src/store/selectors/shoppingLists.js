import { createSelector } from "@reduxjs/toolkit";
import { sortByValues } from "constantStrings";
import { selectShoppingLists } from "store/selectors";
import { filterByName, sortIdsByName } from "utils";

export const makeSelectShoppingLists = () =>
  createSelector(
    selectShoppingLists,
    (_, options) => options,
    (shoppingLists, { sortBy, search } = {}) => {
      let results = [];

      if (!sortBy || sortBy === sortByValues.nameAsc) {
        results = sortIdsByName(
          [...shoppingLists.allIds],
          shoppingLists.byId,
          "shoppingListName"
        );
      } else if (sortBy === sortByValues.nameDesc) {
        results = sortIdsByName(
          [...shoppingLists.allIds],
          shoppingLists.byId,
          "shoppingListName",
          true
        );
      }

      results = results.map((listId) => shoppingLists.byId[listId]);

      if (search) {
        results = filterByName(results, "shoppingListName", search);
      } else if (search === "") return [];

      return results;
    }
  );
