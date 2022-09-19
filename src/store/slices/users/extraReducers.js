import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await api.users.login(login, password);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ userName, email, password }, { rejectWithValue }) => {
    try {
      const response = await api.users.register(userName, email, password);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async (
    { newUserName, newEmail, newPassword, currentPassword },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.users.edit(
        newUserName,
        newEmail,
        newPassword,
        currentPassword
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const renewToken = createAsyncThunk(
  "users/renewToken",
  async (_, { rejectWithValue }) => {
    const response = await api.users.renew();
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);
