import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getLabels = createAsyncThunk(
  "labels/getLabels",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.labels.get();
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const createLabel = createAsyncThunk(
  "labels/createLabel",
  async (labelName, { rejectWithValue }) => {
    try {
      const response = await api.labels.create(labelName);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const editLabel = createAsyncThunk(
  "labels/editLabel",
  async ({ labelId, labelName }, { rejectWithValue }) => {
    try {
      const response = await api.labels.edit(labelId, labelName);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const deleteLabel = createAsyncThunk(
  "labels/deleteLabel",
  async (labelId, { rejectWithValue }) => {
    try {
      const response = await api.labels.delete(labelId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
