import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getShoppingListItems = createAsyncThunk(
  "shoppingListItems/getShoppingListItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.shoppingListItems.get();
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const createShoppingListItem = createAsyncThunk(
  "shoppingListItems/createShoppingListItem",
  async (
    { shoppingListItemName, amount, shoppingListId },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.shoppingListItems.create(
        shoppingListItemName,
        amount,
        shoppingListId
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const editShoppingListItem = createAsyncThunk(
  "shoppingListItems/editShoppingListItem",
  async (
    {
      shoppingListItemId,
      shoppingListItemName,
      amount,
      shoppingListId,
      selected,
    },
    { rejectWithValue }
  ) => {
    if (shoppingListId === "") shoppingListId = null;

    try {
      const response = await api.shoppingListItems.edit(
        shoppingListItemId,
        shoppingListItemName,
        amount,
        shoppingListId,
        selected
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const deleteShopppingListItem = createAsyncThunk(
  "shoppingListItems/deleteShopppingListItem",
  async (shoppingListItemId, { rejectWithValue }) => {
    try {
      const response = await api.shoppingListItems.delete(shoppingListItemId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
