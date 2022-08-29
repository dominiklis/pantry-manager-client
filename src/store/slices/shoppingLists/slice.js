import { createSlice } from "@reduxjs/toolkit";
import {
  getShoppingLists,
  createShoppingList,
  editShoppingList,
  deleteShoppingList,
  getShoppingListUsers,
  shareShoppingList,
  editShoppingListAccess,
  removeShoppingListAccess,
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
    getUsers: false,
    share: false,
    editAccess: false,
    removeAccess: false,
  },
  errors: {
    create: "",
    edit: "",
    delete: "",
    getUsers: "",
    share: "",
    editAccess: "",
    removeAccess: "",
  },
};

const shoppingListsSlice = createSlice({
  name: "shoppingLists",
  initialState,
  reducers: {
    setShoppingLists: (state, action) => {
      const [byId, allIds] = normalizeArrayState(
        action.payload,
        "shoppingListId"
      );

      state.byId = byId;
      state.allIds = allIds;
    },

    removeShoppingListFromStore: (state, action) => {
      delete state.byId[action.payload];

      state.allIds.splice(
        state.allIds.findIndex((x) => x === action.payload),
        1
      );
    },

    setGetShoppingListsLoading: (state, action) => {
      state.loading.getting = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder

      //get shopping lists
      .addCase(getShoppingLists.pending, (state) => {
        state.loading.getting = true;
      })
      .addCase(getShoppingLists.fulfilled, (state, action) => {
        const [byId, allIds] = normalizeArrayState(
          action.payload,
          "shoppingListId"
        );

        state.byId = byId;
        state.allIds = allIds;

        state.loading.getting = false;
      })
      .addCase(getShoppingLists.rejected, (state, action) => {
        console.log(action);

        state.loading.getting = false;
      })

      // create shopping list
      .addCase(createShoppingList.pending, (state) => {
        state.loading.create = true;
      })
      .addCase(createShoppingList.fulfilled, (state, action) => {
        state.byId[action.payload.shoppingListId] = action.payload;
        state.allIds.push(action.payload.shoppingListId);

        state.errors.create = "";
        state.loading.create = false;
      })
      .addCase(createShoppingList.rejected, (state, action) => {
        state.errors.create = action.payload;
        state.loading.create = false;
      })

      // edit shopping list
      .addCase(editShoppingList.pending, (state) => {
        state.loading.edit = true;
      })
      .addCase(editShoppingList.fulfilled, (state, action) => {
        state.byId[action.payload.shoppingListId].shoppingListName =
          action.payload.shoppingListName;

        state.errors.edit = "";
        state.loading.edit = false;
      })
      .addCase(editShoppingList.rejected, (state, action) => {
        state.errors.edit = action.payload;
        state.loading.edit = false;
      })

      // delete shopping list
      .addCase(deleteShoppingList.pending, (state) => {
        state.loading.delete = true;
      })
      .addCase(deleteShoppingList.fulfilled, (state, action) => {
        delete state.byId[action.payload.shoppingListId];

        state.allIds.splice(
          state.allIds.findIndex((x) => x === action.payload.shoppingListId),
          1
        );

        state.errors.delete = "";
        state.loading.delete = false;
      })
      .addCase(deleteShoppingList.rejected, (state, action) => {
        state.errors.delete = action.payload;
        state.loading.delete = false;
      })

      // get users with access to shopping list
      .addCase(getShoppingListUsers.pending, (state) => {
        state.loading.getUsers = true;
      })
      .addCase(getShoppingListUsers.fulfilled, (state, action) => {
        state.byId[action.payload.shoppingListId].users = action.payload.users;

        state.errors.getUsers = "";
        state.loading.getUsers = false;
      })
      .addCase(getShoppingListUsers.rejected, (state, action) => {
        state.errors.getUsers = action.payload;
        state.loading.getUsers = false;
      })

      // share shopping list
      .addCase(shareShoppingList.pending, (state) => {
        state.loading.share = true;
      })
      .addCase(shareShoppingList.fulfilled, (state, action) => {
        state.byId[action.payload.shoppingListId].users.push(action.payload);

        state.errors.share = "";
        state.loading.share = false;
      })
      .addCase(shareShoppingList.rejected, (state, action) => {
        state.errors.share = action.payload;
        state.loading.share = false;
      })

      // edit access to storage
      .addCase(editShoppingListAccess.pending, (state) => {
        state.loading.editAccess = true;
      })
      .addCase(editShoppingListAccess.fulfilled, (state, action) => {
        const index = state.byId[action.payload.shoppingListId].users.findIndex(
          (x) => x.userId === action.payload.userId
        );

        state.byId[action.payload.shoppingListId].users[index].canShare =
          action.payload.canShare;

        state.errors.editAccess = "";
        state.loading.editAccess = false;
      })
      .addCase(editShoppingListAccess.rejected, (state, action) => {
        state.errors.editAccess = action.payload;
        state.loading.editAccess = false;
      })

      // remove access to list
      .addCase(removeShoppingListAccess.pending, (state) => {
        state.loading.removeAccess = true;
      })
      .addCase(removeShoppingListAccess.fulfilled, (state, action) => {
        state.byId[action.payload.shoppingListId].users = state.byId[
          action.payload.shoppingListId
        ].users.filter((a) => a.userId !== action.payload.userId);

        state.errors.removeAccess = "";
        state.loading.removeAccess = false;
      })
      .addCase(removeShoppingListAccess.rejected, (state, action) => {
        state.errors.removeAccess = action.payload;
        state.loading.removeAccess = false;
      }),
});

export const {
  setShoppingLists,
  removeShoppingListFromStore,
  setGetShoppingListsLoading,
} = shoppingListsSlice.actions;

export default shoppingListsSlice.reducer;
