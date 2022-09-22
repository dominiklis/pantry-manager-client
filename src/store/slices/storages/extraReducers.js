import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getStorages = createAsyncThunk(
  "storages/getStorages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.storages.get();
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const createStorage = createAsyncThunk(
  "storages/createStorage",
  async (
    { storageName, color, numberOfDaysForWarning },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.storages.create(
        storageName,
        color,
        numberOfDaysForWarning
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const editStorage = createAsyncThunk(
  "storages/editStorage",
  async (
    { storageId, storageName, color, numberOfDaysForWarning },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.storages.edit(
        storageId,
        storageName,
        color,
        numberOfDaysForWarning
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const deleteStorage = createAsyncThunk(
  "storages/deleteStorage",
  async ({ storageId, deleteProducts }, { rejectWithValue }) => {
    try {
      const response = await api.storages.delete(storageId, deleteProducts);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getStorageUsers = createAsyncThunk(
  "storages/getStorageUsers",
  async (storageId, { rejectWithValue }) => {
    const response = await api.storages.getUsers(storageId);

    if (response.data) return { storageId, users: response.data };

    return rejectWithValue(response.message);
  }
);

export const shareStorage = createAsyncThunk(
  "storages/shareStorage",
  async ({ storageId, login, canShare }, { rejectWithValue }) => {
    try {
      const response = await api.storages.share(storageId, login, canShare);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const editStorageAccess = createAsyncThunk(
  "storages/editStorageAccess",
  async ({ storageId, userId, canShare }, { rejectWithValue }) => {
    try {
      const response = await api.storages.editAccess(
        storageId,
        userId,
        canShare
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const removeStorageAccess = createAsyncThunk(
  "storages/removeStorageAccess",
  async ({ storageId, userId }, { rejectWithValue }) => {
    try {
      const response = await api.storages.deleteAccess(storageId, userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
