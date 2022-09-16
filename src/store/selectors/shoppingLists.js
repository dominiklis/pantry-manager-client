import { createSelector } from "@reduxjs/toolkit";
import { sortByValues } from "constantStrings";
import { selectShoppingLists } from "store/selectors";
import { sortIdsByName } from "utils";

export const makeSelectShoppingLists = () =>
  createSelector(
    selectShoppingLists,
    (_, options = {}) => options,
    (shoppingLists, options) => {
      const { sortBy } = options;

      let result = [];

      if (!sortBy || sortBy === sortByValues.nameAsc) {
        result = sortIdsByName(
          [...shoppingLists.allIds],
          shoppingLists.byId,
          "shoppingListName"
        );
      } else if (sortBy === sortByValues.nameDesc) {
        result = sortIdsByName(
          [...shoppingLists.allIds],
          shoppingLists.byId,
          "shoppingListName",
          true
        );
      }

      result = result.map((listId) => shoppingLists.byId[listId]);

      return result;
    }
  );
