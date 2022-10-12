import { createSlice } from "@reduxjs/toolkit";
import { displayAs, sortByValues } from "constantStrings";

const initialState = {
  home: {
    showExpired: true,
    showCloseToExpiry: true,
    sortStoragesBy: sortByValues.nameAsc,
    displayStoragesAs: displayAs.list,
  },
};

const appSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setHomeShowExpired: (state, action) => {
      if (action.payload === null)
        state.home.showExpired = !state.home.showExpired;
      else state.home.showExpired = action.payload;
    },

    setHomeShowCloseToExpiry: (state, action) => {
      if (action.payload === null)
        state.home.showCloseToExpiry = !state.home.showCloseToExpiry;
      else state.home.showCloseToExpiry = action.payload;
    },

    setHomeSortStoragesBy: (state) => {
      if (state.home.sortStoragesBy === sortByValues.nameAsc)
        state.home.sortStoragesBy = sortByValues.nameDesc;
      else state.home.sortStoragesBy = sortByValues.nameAsc;
    },

    setHomeDisplaySToragesAs: (state) => {
      if (state.home.displayStoragesAs === displayAs.grid)
        state.home.displayStoragesAs = displayAs.list;
      else state.home.displayStoragesAs = displayAs.grid;
    },
  },
});

export default appSlice.reducer;

export const {
  setHomeShowExpired,
  setHomeShowCloseToExpiry,
  setHomeSortStoragesBy,
  setHomeDisplaySToragesAs,
} = appSlice.actions;
