import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "./extraReducers";
import { normalizeArrayState } from "utils";

const initialState = {
  user: null,
  token: null,
  loading: {
    login: false,
    register: false,
    edit: false,
  },
  errors: {
    login: "",
    register: "",
    edit: "",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      const [byId, allIds] = normalizeArrayState(action.payload, "productId");

      state.byId = byId;
      state.allIds = allIds;
    },

    setStorageToNull: (state, action) => {
      state.allIds.forEach((id) => {
        if (state.byId[id].storageId === action.payload)
          state.byId[id].storageId = null;
      });
    },

    deleteLabelInProducts: (state, action) => {
      state.allIds.forEach((id) => {
        if (state.byId[id].labels?.includes(action.payload)) {
          state.byId[id].labels = state.byId[id].labels.filter(
            (label) => label !== action.payload
          );
        }
      });
    },

    deleteProductsInStorage: (state, action) => {
      state.allIds = state.allIds.filter((id) => {
        if (state.byId[id].storageId === action.payload) {
          delete state.byId[id];
          return false;
        }

        return true;
      });
    },

    setGetProductsLoading: (state, action) => {
      state.loading.getting = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder

      //get products
      .addCase(getProducts.pending, (state) => {
        state.loading.getting = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        const [byId, allIds] = normalizeArrayState(action.payload, "productId");

        state.byId = byId;
        state.allIds = allIds;

        state.loading.getting = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log(action);

        state.loading.getting = false;
      })

      // create product
      .addCase(createProduct.pending, (state) => {
        state.loading.create = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.byId[action.payload.productId] = action.payload;
        state.allIds.push(action.payload.productId);

        state.errors.create = "";
        state.loading.create = false;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.errors.create = action.payload;
        state.loading.create = false;
      })

      // edit product
      .addCase(editProduct.pending, (state) => {
        state.loading.edit = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.byId[action.payload.productId] = action.payload;

        state.errors.edit = "";
        state.loading.edit = false;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.errors.edit = action.payload;
        state.loading.edit = false;
      })

      // delete product
      .addCase(deleteProduct.pending, (state) => {
        state.loading.delete = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        delete state.byId[action.payload.productId];

        state.allIds.splice(
          state.allIds.findIndex((x) => x === action.payload.productId),
          1
        );

        state.errors.delete = "";
        state.loading.delete = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.errors.delete = action.payload;
        state.loading.delete = false;
      }),
});

export default productsSlice.reducer;

export const {
  setProducts,
  deleteProductsInStorage,
  setStorageToNull,
  deleteLabelInProducts,
  setGetProductsLoading,
} = productsSlice.actions;
