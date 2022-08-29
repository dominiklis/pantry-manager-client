import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    const response = await api.products.get();
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (
    { productName, expirationDate, amount, unit, storageId, labels },
    { rejectWithValue }
  ) => {
    const response = await api.products.create(
      productName,
      expirationDate,
      amount,
      unit,
      storageId,
      labels
    );
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (
    { productId, productName, expirationDate, amount, unit, storageId, labels },
    { rejectWithValue }
  ) => {
    const response = await api.products.edit(
      productId,
      productName,
      expirationDate,
      amount,
      unit,
      storageId,
      labels
    );
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, { rejectWithValue }) => {
    const response = await api.products.delete(productId);
    if (response.data) return response.data;

    return rejectWithValue(response.message);
  }
);
