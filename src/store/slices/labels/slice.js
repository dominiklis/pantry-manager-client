import { createSlice } from "@reduxjs/toolkit";
import {
  createLabel,
  deleteLabel,
  editLabel,
  getLabels,
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

const labelsSlice = createSlice({
  name: "labels",
  initialState,
  reducers: {
    setLabels: (state, action) => {
      const [byId, allIds] = normalizeArrayState(action.payload, "labelId");

      state.byId = byId;
      state.allIds = allIds;
    },

    setGetLabelsLoading: (state, action) => {
      state.loading.getting = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder

      //get labels
      .addCase(getLabels.pending, (state) => {
        state.loading.getting = true;
      })
      .addCase(getLabels.fulfilled, (state, action) => {
        const [byId, allIds] = normalizeArrayState(action.payload, "labelId");

        state.byId = byId;
        state.allIds = allIds;

        state.loading.getting = false;
      })
      .addCase(getLabels.rejected, (state, action) => {
        console.log(action);

        state.loading.getting = false;
      })

      // create label
      .addCase(createLabel.pending, (state) => {
        state.loading.create = true;
      })
      .addCase(createLabel.fulfilled, (state, action) => {
        state.byId[action.payload.labelId] = action.payload;
        state.allIds.push(action.payload.labelId);

        state.errors.create = "";
        state.loading.create = false;
      })
      .addCase(createLabel.rejected, (state, action) => {
        state.errors.create = action.payload;
        state.loading.create = false;
      })

      // edit label
      .addCase(editLabel.pending, (state) => {
        state.loading.edit = true;
      })
      .addCase(editLabel.fulfilled, (state, action) => {
        state.byId[action.payload.labelId] = action.payload;

        state.errors.edit = "";
        state.loading.edit = false;
      })
      .addCase(editLabel.rejected, (state, action) => {
        state.errors.edit = action.payload;
        state.loading.edit = false;
      })

      // delete label
      .addCase(deleteLabel.pending, (state) => {
        state.loading.delete = true;
      })
      .addCase(deleteLabel.fulfilled, (state, action) => {
        delete state.byId[action.payload.labelId];

        state.allIds.splice(
          state.allIds.findIndex((x) => x === action.payload.labelId),
          1
        );

        state.errors.delete = "";
        state.loading.delete = false;
      })
      .addCase(deleteLabel.rejected, (state, action) => {
        state.errors.delete = action.payload;
        state.loading.delete = false;
      }),
});

export default labelsSlice.reducer;

export const { setLabels, setGetLabelsLoading } = labelsSlice.actions;
