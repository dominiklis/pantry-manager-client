import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: {
    showExpired: true,
    showCloseToExpiry: true,
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
  },
});

export default appSlice.reducer;

export const { setHomeShowExpired, setHomeShowCloseToExpiry } =
  appSlice.actions;
