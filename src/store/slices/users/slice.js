import { createSlice } from "@reduxjs/toolkit";
import { localStorageKeys } from "constantStrings";
import { editUser, loginUser, registerUser, renewToken } from "./extraReducers";

const saveTokenInLocalStorage = (token) => {
  localStorage.setItem(localStorageKeys.userTokenKey, token);
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(localStorageKeys.userTokenKey);
};

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

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearErrors: (state, action) => {
      action.payload.forEach((field) => {
        state.errors[field] = "";
      });
    },

    logoutUser: (state) => {
      removeTokenFromLocalStorage();

      state.user = null;
      state.token = null;
      state.loading = {
        login: false,
      };
      state.errors = {
        login: "",
      };
    },
  },
  extraReducers: (builder) =>
    builder
      // login
      .addCase(loginUser.pending, (state) => {
        state.loading.login = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = {
          userId: action.payload.userId,
          userName: action.payload.userName,
          email: action.payload.email,
          defaultStorageId: action.payload.defaultStorageId,
          defaultShoppingListId: action.payload.defaultShoppingListId,
        };

        saveTokenInLocalStorage(action.payload.token);

        state.errors.login = "";
        state.loading.login = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.errors.login = action.payload;
        state.loading.login = false;
      })

      // register
      .addCase(registerUser.pending, (state) => {
        state.loading.register = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = {
          userId: action.payload.userId,
          userName: action.payload.userName,
          email: action.payload.email,
          defaultStorageId: action.payload.defaultStorageId,
          defaultShoppingListId: action.payload.defaultShoppingListId,
        };

        saveTokenInLocalStorage(action.payload.token);

        state.errors.register = "";
        state.loading.register = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.errors.register = action.payload;
        state.loading.register = false;
      })

      // edit
      .addCase(editUser.pending, (state) => {
        state.loading.edit = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = {
          userId: action.payload.userId,
          userName: action.payload.userName,
          email: action.payload.email,
          defaultStorageId: action.payload.defaultStorageId,
          defaultShoppingListId: action.payload.defaultShoppingListId,
        };

        saveTokenInLocalStorage(action.payload.token);

        state.errors.edit = "";
        state.loading.edit = false;
      })
      .addCase(editUser.rejected, (state, action) => {
        state.errors.edit = action.payload;
        state.loading.edit = false;
      })

      // renew token
      .addCase(renewToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = {
          userId: action.payload.userId,
          userName: action.payload.userName,
          email: action.payload.email,
          defaultStorageId: action.payload.defaultStorageId,
          defaultShoppingListId: action.payload.defaultShoppingListId,
        };

        saveTokenInLocalStorage(action.payload.token);
      })
      .addCase(renewToken.rejected, (state) => {
        state.user = null;
        state.token = null;

        removeTokenFromLocalStorage();
      }),
});

export default usersSlice.reducer;

export const { clearErrors, logoutUser } = usersSlice.actions;
