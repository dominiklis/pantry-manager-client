import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getShoppingLists = createAsyncThunk(
  "shoppingLists/getShoppingLists",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.shoppingLists.get();
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const createShoppingList = createAsyncThunk(
  "shoppingLists/createShoppingList",
  async (shoppingListName, { rejectWithValue }) => {
    try {
      const response = await api.shoppingLists.create(shoppingListName);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const editShoppingList = createAsyncThunk(
  "shoppingLists/ShoppingList",
  async ({ shoppingListId, shoppingListName }, { rejectWithValue }) => {
    try {
      const response = await api.shoppingLists.edit(
        shoppingListId,
        shoppingListName
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const deleteShoppingList = createAsyncThunk(
  "shoppingLists/deleteShoppingList",
  async ({ shoppingListId, deleteItems }, { rejectWithValue }) => {
    try {
      const response = await api.shoppingLists.delete(
        shoppingListId,
        deleteItems
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getShoppingListUsers = createAsyncThunk(
  "shoppingLists/refreshShoppingListUsers",
  async (shoppingListId, { rejectWithValue }) => {
    try {
      const response = await api.shoppingLists.getUsers(shoppingListId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const shareShoppingList = createAsyncThunk(
  "shoppingLists/shareShoppingList",
  async ({ shoppingListId, login, canShare }, { rejectWithValue }) => {
    try {
      const response = await api.shoppingLists.share(
        shoppingListId,
        login,
        canShare
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const editShoppingListAccess = createAsyncThunk(
  "shoppingLists/editShoppingListAccess",
  async ({ shoppingListId, userId, canShare }, { rejectWithValue }) => {
    try {
      const response = await api.shoppingLists.editAccess(
        shoppingListId,
        userId,
        canShare
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const removeShoppingListAccess = createAsyncThunk(
  "shoppingLists/removeShoppingListAccess",
  async ({ shoppingListId, userId }, { rejectWithValue }) => {
    try {
      const response = await api.shoppingLists.deleteAccess(
        shoppingListId,
        userId
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
