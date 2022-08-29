import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const setSettings = createAsyncThunk(
  "app/setSettings",
  async (userId, { rejectWithValue }) => {
    const response = await api.settings.get(userId);

    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const updateSettings = createAsyncThunk(
  "app/updateSettings",
  async ({ userId, days, language, theme }, { rejectWithValue }) => {
    const response = await api.settings.edit(userId, days, language, theme);
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);
