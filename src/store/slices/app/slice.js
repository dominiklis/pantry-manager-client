import { createSlice } from "@reduxjs/toolkit";
import {
  createMenuTabs,
  languages,
  localStorageKeys,
  themes,
  various,
} from "constantStrings";
import { v4 as uuid } from "uuid";
import { getSettings, updateSettings } from "./extraReducers";

const initialState = {
  initialLoad: false,
  toasts: [],
  language:
    localStorage.getItem(localStorageKeys.language) ?? languages.english,
  theme: localStorage.getItem(localStorageKeys.theme) ?? themes.light,
  search: "",
  createMenu: {
    isVisible: false,
    selectedTab: createMenuTabs.createProduct,
    storageId: various.noStorage,
    labelId: null,
  },
  uploadMenu: {
    isVisible: false,
    storageId: various.noStorage,
  },
  defaultNumberOfDaysForWarning: 3,
  defaultStorageId: null,
  defaultShoppingListId: null,
  languages: null,
  themes: null,
  colors: null,
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

    hideMenus: (state) => {
      state.createMenu.isVisible = false;
      state.uploadMenu.isVisible = false;
    },

    showCreateMenu: (state) => {
      state.createMenu.isVisible = true;
    },

    hideUploadMenu: (state) => {
      state.uploadMenu.isVisible = false;
    },

    setCreateMenu: (state, action) => {
      if (!action.payload) action.payload = {};

      const { isVisible, selectedTab, storageId, labelId, shoppingListId } =
        action.payload;
      if (isVisible === true || isVisible === false)
        state.createMenu.isVisible = isVisible;

      state.createMenu.selectedTab =
        selectedTab ?? createMenuTabs.createProduct;
      state.createMenu.storageId = storageId ?? various.noStorage;
      state.createMenu.labelId = labelId ?? null;
      state.createMenu.shoppingListId =
        shoppingListId ?? various.noShoppingList;
    },

    setUploadMenu: (state, action) => {
      const { isVisible, storageId } = action.payload;

      if (isVisible === true || isVisible === false)
        state.uploadMenu.isVisible = isVisible;

      if (storageId && storageId !== various.noStorage)
        state.uploadMenu.storageId = storageId;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getSettings.pending, (state) => {
        state.loading.getSettings = true;
      })
      .addCase(getSettings.fulfilled, (state, action) => {
        state.defaultNumberOfDaysForWarning =
          action.payload.defaultNumberOfDaysForWarning;
        state.language = action.payload.language;
        state.theme = action.payload.theme;
        state.defaultStorageId = action.payload.defaultStorageId;
        state.defaultShoppingListId = action.payload.defaultShoppingListId;
        state.lagnuages = action.payload.languages;
        state.themes = action.payload.themes;
        state.colors = action.payload.colors;

        state.loading.getSettings = false;
      })

      .addCase(updateSettings.pending, (state) => {
        state.loading.updateSettings = true;
      })
      .addCase(updateSettings.fulfilled, (state, action) => {
        state.defaultNumberOfDaysForWarning =
          action.payload.defaultNumberOfDaysForWarning;
        state.language = action.payload.language;
        state.theme = action.payload.theme;

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
  hideMenus,
  setCreateMenu,
  setUploadMenu,
  showCreateMenu,
  hideUploadMenu,
} = appSlice.actions;
