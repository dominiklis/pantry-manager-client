import { createSlice } from "@reduxjs/toolkit";
import { localStorageKeys } from "constants";
import { v4 as uuid } from "uuid";
import { setSettings, updateSettings } from "./updateSettings";

const initialState = {
  initialLoad: false,
  toasts: [],
  language: localStorage.getItem(localStorageKeys.language) ?? "en",
  theme: localStorage.getItem(localStorageKeys.theme) ?? "light",
  defaultNumberOfDaysForWarning: 3,
  loading: {
    getSettings: true,
    updateSettings: false,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInitialLoad: (state, action) => {
      state.initialLoad = action.payload;
    },

    setLanguage: (state, action) => {
      localStorage.setItem(localStorageKeys.language, action.payload);
      state.language = action.payload;
    },

    addToast: (state, action) => {
      state.toasts.push({
        id: uuid(),
        message: action.payload.message,
        color: action.payload.color,
        translate: action.payload.translate,
      });
    },

    removeToast: (state, action) => {
      state.toasts = [...state.toasts].filter((t) => t.id !== action.payload);
    },

    setTheme: (state, action) => {
      localStorage.setItem(localStorageKeys.theme, action.payload);
      state.theme = action.payload;
    },

    toggleTheme: (state) => {
      const theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem(localStorageKeys.theme, theme);
      state.theme = theme;
    },

    setGetSettingsLoading: (state, action) => {
      state.loading.getSettings = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(setSettings.pending, (state) => {
        state.loading.getSettings = true;
      })
      .addCase(setSettings.fulfilled, (state, action) => {
        const { defaultNumberOfDaysForWarning, language, theme } =
          action.payload;
        state.defaultNumberOfDaysForWarning = defaultNumberOfDaysForWarning;
        state.language = language;
        state.theme = theme;

        state.loading.getSettings = false;
      })

      .addCase(updateSettings.pending, (state) => {
        state.loading.updateSettings = true;
      })
      .addCase(updateSettings.fulfilled, (state, action) => {
        const { defaultNumberOfDaysForWarning, language, theme } =
          action.payload;
        state.defaultNumberOfDaysForWarning = defaultNumberOfDaysForWarning;
        state.language = language;
        state.theme = theme;

        state.loading.updateSettings = false;
      }),
});

export default appSlice.reducer;

export const {
  setInitialLoad,
  setLanguage,
  addToast,
  removeToast,
  setTheme,
  toggleTheme,
  setGetSettingsLoading,
} = appSlice.actions;
