import { createSelector } from "@reduxjs/toolkit";
import { selectShoppingListItems } from "store/selectors";

export const makeSelectShoppingListItems = () =>
  createSelector(
    selectShoppingListItems,
    (_, shoppingListId) => shoppingListId,
    (lists, shoppingListId) => {
      if (!shoppingListId) shoppingListId = null;

      return lists.allIds
        .filter((id) => lists.byId[id].shoppingListId === shoppingListId)
        .map((id) => lists.byId[id]);
    }
  );
