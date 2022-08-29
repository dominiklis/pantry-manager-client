import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getShoppingLists = createAsyncThunk(
  "shoppingLists/getShoppingLists",
  async (_, { rejectWithValue }) => {
    const response = await api.shoppingLists.get();
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const createShoppingList = createAsyncThunk(
  "shoppingLists/createShoppingList",
  async (shoppingListName, { rejectWithValue }) => {
    const response = await api.shoppingLists.create(shoppingListName);
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const editShoppingList = createAsyncThunk(
  "shoppingLists/ShoppingList",
  async ({ shoppingListId, shoppingListName }, { rejectWithValue }) => {
    const response = await api.shoppingLists.edit(
      shoppingListId,
      shoppingListName
    );
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const deleteShoppingList = createAsyncThunk(
  "shoppingLists/deleteShoppingList",
  async ({ shoppingListId, deleteItems }, { rejectWithValue }) => {
    const response = await api.shoppingLists.delete(
      shoppingListId,
      deleteItems
    );
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const getShoppingListUsers = createAsyncThunk(
  "shoppingLists/refreshShoppingListUsers",
  async (shoppingListId, { rejectWithValue }) => {
    const response = await api.shoppingLists.getUsers(shoppingListId);

    if (response.data) return { shoppingListId, users: response.data };

    return rejectWithValue(response.message);
  }
);

export const shareShoppingList = createAsyncThunk(
  "shoppingLists/shareShoppingList",
  async ({ shoppingListId, login, canShare }, { rejectWithValue }) => {
    const response = await api.shoppingLists.share(
      shoppingListId,
      login,
      canShare
    );
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const editShoppingListAccess = createAsyncThunk(
  "shoppingLists/editShoppingListAccess",
  async ({ shoppingListId, userId, canShare }, { rejectWithValue }) => {
    const response = await api.shoppingLists.editAccess(
      shoppingListId,
      userId,
      canShare
    );
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const removeShoppingListAccess = createAsyncThunk(
  "shoppingLists/removeShoppingListAccess",
  async ({ shoppingListId, userId }, { rejectWithValue }) => {
    const response = await api.shoppingLists.deleteAccess(
      shoppingListId,
      userId
    );

    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);
