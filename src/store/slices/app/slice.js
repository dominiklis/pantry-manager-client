import { createSlice } from "@reduxjs/toolkit";
import {
  createOverlay,
  languages,
  localStorageKeys,
  themes,
  various,
} from "constantStrings";
import { v4 as uuid } from "uuid";
import { setSettings, updateSettings } from "./extraReducers";

const initialState = {
  initialLoad: false,
  toasts: [],
  language:
    localStorage.getItem(localStorageKeys.language) ?? languages.english,
  theme: localStorage.getItem(localStorageKeys.theme) ?? themes.light,
  defaultNumberOfDaysForWarning: 3,
  loading: {
    getSettings: true,
    updateSettings: false,
  },
  search: "",
  createOverlay: {
    isVisible: false,
    selectedTab: createOverlay.tabs.createProduct,
    storageId: various.noStorage,
    labelId: null,
  },
  uploadOverlay: {
    isVisible: false,
    storageId: various.noStorage,
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
      const theme = state.theme === themes.dark ? themes.light : themes.dark;
      localStorage.setItem(localStorageKeys.theme, theme);
      state.theme = theme;
    },

    setGetSettingsLoading: (state, action) => {
      state.loading.getSettings = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    showCreateOverlay: (state) => {
      state.createOverlay.isVisible = true;
    },

    hideCreateOverlay: (state) => {
      state.createOverlay.isVisible = false;
    },

    setCreateOverlay: (state, action) => {
      if (!action.payload) action.payload = {};

      const { isVisible, selectedTab, storageId, labelId, shoppingListId } =
        action.payload;
      if (isVisible === true || isVisible === false)
        state.createOverlay.isVisible = isVisible;

      state.createOverlay.selectedTab =
        selectedTab ?? createOverlay.tabs.createProduct;
      state.createOverlay.storageId = storageId ?? various.noStorage;
      state.createOverlay.labelId = labelId ?? null;
      state.createOverlay.shoppingListId =
        shoppingListId ?? various.noShoppingList;
    },

    setUploadOverlay: (state, action) => {
      const { isVisible, storageId } = action.payload;

      if (isVisible === true || isVisible === false)
        state.uploadOverlay.isVisible = isVisible;

      if (storageId && storageId !== various.noStorage)
        state.uploadOverlay.storageId = storageId;
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
  setSearch,
  showCreateOverlay,
  hideCreateOverlay,
  setCreateOverlay,
  setUploadOverlay,
} = appSlice.actions;
