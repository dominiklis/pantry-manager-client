import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.products.get();
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (
    { productName, expirationDate, amount, storageId, labels },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.products.create(
        productName,
        expirationDate,
        amount,
        storageId,
        labels
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (
    { productId, productName, expirationDate, amount, storageId, labels },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.products.edit(
        productId,
        productName,
        expirationDate,
        amount,
        storageId,
        labels
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.products.delete(productId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
