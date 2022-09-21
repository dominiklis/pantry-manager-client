import {
  setInitialLoad,
  setLanguage,
  addToast,
  removeToast,
  setTheme,
  toggleTheme,
  setGetSettingsLoading,
  setSearch,
} from "./slices/app/slice";
import { setSettings, updateSettings } from "./slices/app/extraReducers";
import { clearErrors, logoutUser } from "./slices/users/slice";
import {
  loginUser,
  registerUser,
  renewToken,
  editUser,
} from "./slices/users/extraReducers";
import {
  setStorages,
  removeStorageFromStore,
  setGetStoragesLoading,
} from "./slices/storages/slice";
import {
  createStorage,
  deleteStorage,
  editStorage,
  editStorageAccess,
  getStorages,
  getStorageUsers,
  removeStorageAccess,
  shareStorage,
} from "./slices/storages/extraReducers";
import {
  setProducts,
  deleteProductsInStorage,
  setStorageToNull,
  deleteLabelInProducts,
  setGetProductsLoading,
} from "./slices/products/slice";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "./slices/products/extraReducers";
import { setLabels, setGetLabelsLoading } from "./slices/labels/slice";
import {
  createLabel,
  deleteLabel,
  editLabel,
  getLabels,
} from "./slices/labels/extraReducers";
import {
  setShoppingLists,
  removeShoppingListFromStore,
  setGetShoppingListsLoading,
} from "./slices/shoppingLists/slice";
import {
  getShoppingLists,
  createShoppingList,
  editShoppingList,
  deleteShoppingList,
  getShoppingListUsers,
  shareShoppingList,
  editShoppingListAccess,
  removeShoppingListAccess,
} from "./slices/shoppingLists/extraReducers";
import {
  setShoppingListItems,
  deleteItemsInList,
  setListToNull,
  setGetShoppingListItemsLoading,
} from "./slices/shoppingListItems/slice";
import {
  getShoppingListItems,
  createShoppingListItem,
  editShoppingListItem,
  deleteShopppingListItem,
} from "./slices/shoppingListItems/extraReducers";

export {
  // app actions
  setInitialLoad,
  setLanguage,
  addToast,
  removeToast,
  setTheme,
  toggleTheme,
  setGetSettingsLoading,
  setSettings,
  updateSettings,
  setSearch,

  // users actions
  loginUser,
  registerUser,
  renewToken,
  editUser,
  clearErrors,
  logoutUser,

  // storages actions
  setStorages,
  removeStorageFromStore,
  setGetStoragesLoading,
  createStorage,
  deleteStorage,
  editStorage,
  editStorageAccess,
  getStorages,
  getStorageUsers,
  removeStorageAccess,
  shareStorage,

  // products actions
  getProducts,
  setProducts,
  createProduct,
  editProduct,
  deleteProduct,
  deleteProductsInStorage,
  setStorageToNull,
  deleteLabelInProducts,
  setGetProductsLoading,

  // labels actions
  getLabels,
  setLabels,
  createLabel,
  editLabel,
  deleteLabel,
  setGetLabelsLoading,

  // shopping lists actions
  setShoppingLists,
  removeShoppingListFromStore,
  setGetShoppingListsLoading,
  getShoppingLists,
  createShoppingList,
  editShoppingList,
  deleteShoppingList,
  getShoppingListUsers,
  shareShoppingList,
  editShoppingListAccess,
  removeShoppingListAccess,

  // shopping list items actions
  setShoppingListItems,
  deleteItemsInList,
  setListToNull,
  setGetShoppingListItemsLoading,
  getShoppingListItems,
  createShoppingListItem,
  editShoppingListItem,
  deleteShopppingListItem,
};
