import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getSettings = createAsyncThunk(
  "app/getSettings",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.settings.get(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const updateSettings = createAsyncThunk(
  "app/updateSettings",
  async ({ userId, days, language, theme }, { rejectWithValue }) => {
    try {
      const response = await api.settings.edit(userId, days, language, theme);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
