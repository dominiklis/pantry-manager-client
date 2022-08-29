import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getShoppingListItems = createAsyncThunk(
  "shoppingListItems/getShoppingListItems",
  async (_, { rejectWithValue }) => {
    const response = await api.shoppingListItems.get();
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const createShoppingListItem = createAsyncThunk(
  "shoppingListItems/createShoppingListItem",
  async (
    { shoppingListItemName, quantity, shoppingListId },
    { rejectWithValue }
  ) => {
    const response = await api.shoppingListItems.create(
      shoppingListItemName,
      quantity,
      shoppingListId
    );
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const editShoppingListItem = createAsyncThunk(
  "shoppingListItems/editShoppingListItem",
  async (
    {
      shoppingListItemId,
      shoppingListItemName,
      quantity,
      shoppingListId,
      selected,
    },
    { rejectWithValue }
  ) => {
    const response = await api.shoppingListItems.edit(
      shoppingListItemId,
      shoppingListItemName,
      quantity,
      shoppingListId,
      selected
    );
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const deleteShopppingListItem = createAsyncThunk(
  "shoppingListItems/deleteShopppingListItem",
  async (shoppingListItemId, { rejectWithValue }) => {
    const response = await api.shoppingListItems.delete(shoppingListItemId);
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);
