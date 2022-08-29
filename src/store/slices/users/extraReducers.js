import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ login, password }, { rejectWithValue }) => {
    const response = await api.users.login(login, password);
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ userName, email, password }, { rejectWithValue }) => {
    const response = await api.users.register(userName, email, password);
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async (
    { newUserName, newEmail, newPassword, currentPassword },
    { rejectWithValue }
  ) => {
    const response = await api.users.edit(
      newUserName,
      newEmail,
      newPassword,
      currentPassword
    );
    if (response.data) return response.data;

    return rejectWithValue(response.message);
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
