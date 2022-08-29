import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getLabels = createAsyncThunk(
  "labels/getLabels",
  async (_, { rejectWithValue }) => {
    const response = await api.labels.get();
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const createLabel = createAsyncThunk(
  "labels/createLabel",
  async (labelName, { rejectWithValue }) => {
    const response = await api.labels.create(labelName);
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const editLabel = createAsyncThunk(
  "labels/editLabel",
  async ({ labelId, labelName }, { rejectWithValue }) => {
    const response = await api.labels.edit(labelId, labelName);
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const deleteLabel = createAsyncThunk(
  "labels/deleteLabel",
  async (labelId, { rejectWithValue }) => {
    const response = await api.labels.delete(labelId);
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);
