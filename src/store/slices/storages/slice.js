import { createSlice } from "@reduxjs/toolkit";
import {
  createStorage,
  deleteStorage,
  editStorage,
  editStorageAccess,
  getStorages,
  getStorageUsers,
  removeStorageAccess,
  shareStorage,
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

const storagesSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    setStorages: (state, action) => {
      const [byId, allIds] = normalizeArrayState(action.payload, "storageId");

      state.byId = byId;
      state.allIds = allIds;
    },

    removeStorageFromStore: (state, action) => {
      delete state.byId[action.payload];

      state.allIds.splice(
        state.allIds.findIndex((x) => x === action.payload),
        1
      );
    },

    setGetStoragesLoading: (state, action) => {
      state.loading.getting = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder

      //get storages
      .addCase(getStorages.pending, (state) => {
        state.loading.getting = true;
      })
      .addCase(getStorages.fulfilled, (state, action) => {
        const [byId, allIds] = normalizeArrayState(action.payload, "storageId");

        state.byId = byId;
        state.allIds = allIds;

        state.loading.getting = false;
      })
      .addCase(getStorages.rejected, (state, action) => {
        console.log(action);

        state.loading.getting = false;
      })

      // create storage
      .addCase(createStorage.pending, (state) => {
        state.loading.create = true;
      })
      .addCase(createStorage.fulfilled, (state, action) => {
        state.byId[action.payload.storageId] = action.payload;
        state.allIds.push(action.payload.storageId);

        state.errors.create = "";
        state.loading.create = false;
      })
      .addCase(createStorage.rejected, (state, action) => {
        state.errors.create = action.payload;
        state.loading.create = false;
      })

      // edit storage
      .addCase(editStorage.pending, (state) => {
        state.loading.edit = true;
      })
      .addCase(editStorage.fulfilled, (state, action) => {
        state.byId[action.payload.storageId].storageName =
          action.payload.storageName;
        state.byId[action.payload.storageId].color = action.payload.color;
        state.byId[action.payload.storageId].numberOfDaysForWarning =
          action.payload.numberOfDaysForWarning;

        state.errors.edit = "";
        state.loading.edit = false;
      })
      .addCase(editStorage.rejected, (state, action) => {
        state.errors.edit = action.payload;
        state.loading.edit = false;
      })

      // delete storage
      .addCase(deleteStorage.pending, (state) => {
        state.loading.delete = true;
      })
      .addCase(deleteStorage.fulfilled, (state, action) => {
        delete state.byId[action.payload.storageId];

        state.allIds.splice(
          state.allIds.findIndex((x) => x === action.payload.storageId),
          1
        );

        state.errors.delete = "";
        state.loading.delete = false;
      })
      .addCase(deleteStorage.rejected, (state, action) => {
        state.errors.delete = action.payload;
        state.loading.delete = false;
      })

      // get users with access to storage
      .addCase(getStorageUsers.pending, (state) => {
        state.loading.getUsers = true;
      })
      .addCase(getStorageUsers.fulfilled, (state, action) => {
        state.byId[action.payload.storageId].users = action.payload.users;

        state.errors.getUsers = "";
        state.loading.getUsers = false;
      })
      .addCase(getStorageUsers.rejected, (state, action) => {
        state.errors.getUsers = action.payload;
        state.loading.getUsers = false;
      })

      // share storage
      .addCase(shareStorage.pending, (state) => {
        state.loading.share = true;
      })
      .addCase(shareStorage.fulfilled, (state, action) => {
        state.byId[action.payload.storageId].users.push(action.payload);

        state.errors.share = "";
        state.loading.share = false;
      })
      .addCase(shareStorage.rejected, (state, action) => {
        state.errors.share = action.payload;
        state.loading.share = false;
      })

      // edit access to storage
      .addCase(editStorageAccess.pending, (state) => {
        state.loading.editAccess = true;
      })
      .addCase(editStorageAccess.fulfilled, (state, action) => {
        const index = state.byId[action.payload.storageId].users.findIndex(
          (x) => x.userId === action.payload.userId
        );

        state.byId[action.payload.storageId].users[index].canShare =
          action.payload.canShare;

        state.errors.editAccess = "";
        state.loading.editAccess = false;
      })
      .addCase(editStorageAccess.rejected, (state, action) => {
        state.errors.editAccess = action.payload;
        state.loading.editAccess = false;
      })

      // remove access to storage
      .addCase(removeStorageAccess.pending, (state) => {
        state.loading.removeAccess = true;
      })
      .addCase(removeStorageAccess.fulfilled, (state, action) => {
        state.byId[action.payload.storageId].users = state.byId[
          action.payload.storageId
        ].users.filter((a) => a.userId !== action.payload.userId);

        state.errors.removeAccess = "";
        state.loading.removeAccess = false;
      })
      .addCase(removeStorageAccess.rejected, (state, action) => {
        state.errors.removeAccess = action.payload;
        state.loading.removeAccess = false;
      }),
});

export default storagesSlice.reducer;

export const { setStorages, removeStorageFromStore, setGetStoragesLoading } =
  storagesSlice.actions;
