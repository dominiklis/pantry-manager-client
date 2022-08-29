import { createSlice } from "@reduxjs/toolkit";
import {
  getShoppingListItems,
  createShoppingListItem,
  editShoppingListItem,
  deleteShopppingListItem,
} from "./extraReducers";
import { normalizeArrayState } from "utils";

const initialState = {
  byId: {},
  allIds: [],
  loading: {
    getting: true,
    create: false,
    edit: false,
    delete: false,
  },
  errors: {
    create: "",
    edit: "",
    delete: "",
  },
};

const shoppingListItemsSlice = createSlice({
  name: "shoppingListItems",
  initialState,
  reducers: {
    setShoppingListItems: (state, action) => {
      const [byId, allIds] = normalizeArrayState(
        action.payload,
        "shoppingListItemId"
      );

      state.byId = byId;
      state.allIds = allIds;
    },

    deleteItemsInList: (state, action) => {
      state.allIds = state.allIds.filter((id) => {
        if (state.byId[id].shoppingListId === action.payload) {
          delete state.byId[id];
          return false;
        }

        return true;
      });
    },

    setListToNull: (state, action) => {
      state.allIds.forEach((id) => {
        if (state.byId[id].shoppingListId === action.payload)
          state.byId[id].shoppingListId = null;
      });
    },

    setGetShoppingListItemsLoading: (state, action) => {
      state.loading.getting = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder

      //get items
      .addCase(getShoppingListItems.pending, (state) => {
        state.loading.getting = true;
      })
      .addCase(getShoppingListItems.fulfilled, (state, action) => {
        const [byId, allIds] = normalizeArrayState(
          action.payload,
          "shoppingListItemId"
        );

        state.byId = byId;
        state.allIds = allIds;

        state.loading.getting = false;
      })
      .addCase(getShoppingListItems.rejected, (state, action) => {
        console.log(action);

        state.loading.getting = false;
      })

      // create item
      .addCase(createShoppingListItem.pending, (state) => {
        state.loading.create = true;
      })
      .addCase(createShoppingListItem.fulfilled, (state, action) => {
        state.byId[action.payload.shoppingListItemId] = action.payload;
        state.allIds.push(action.payload.shoppingListItemId);

        state.errors.create = "";
        state.loading.create = false;
      })
      .addCase(createShoppingListItem.rejected, (state, action) => {
        state.errors.create = action.payload;
        state.loading.create = false;
      })

      // edit item
      .addCase(editShoppingListItem.pending, (state) => {
        state.loading.edit = true;
      })
      .addCase(editShoppingListItem.fulfilled, (state, action) => {
        state.byId[action.payload.shoppingListItemId] = action.payload;

        state.errors.edit = "";
        state.loading.edit = false;
      })
      .addCase(editShoppingListItem.rejected, (state, action) => {
        state.errors.edit = action.payload;
        state.loading.edit = false;
      })

      // delete item
      .addCase(deleteShopppingListItem.pending, (state) => {
        state.loading.delete = true;
      })
      .addCase(deleteShopppingListItem.fulfilled, (state, action) => {
        delete state.byId[action.payload.shoppingListItemId];

        state.allIds.splice(
          state.allIds.findIndex(
            (x) => x === action.payload.shoppingListItemId
          ),
          1
        );

        state.errors.delete = "";
        state.loading.delete = false;
      })
      .addCase(deleteShopppingListItem.rejected, (state, action) => {
        state.errors.delete = action.payload;
        state.loading.delete = false;
      }),
});

export default shoppingListItemsSlice.reducer;

export const {
  setShoppingListItems,
  deleteItemsInList,
  setListToNull,
  setGetShoppingListItemsLoading,
} = shoppingListItemsSlice.actions;
