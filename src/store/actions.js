import {
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
} from "./slices/app/slice";
import { getSettings, updateSettings } from "./slices/app/extraReducers";
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
  swapStorage,
  deleteLabelInProducts,
  setGetProductsLoading,
} from "./slices/products/slice";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
  createCollectionOfProducts,
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
  swapList,
  deleteItemsInList,
  setGetShoppingListItemsLoading,
} from "./slices/shoppingListItems/slice";
import {
  getShoppingListItems,
  createShoppingListItem,
  editShoppingListItem,
  deleteShopppingListItem,
} from "./slices/shoppingListItems/extraReducers";

import {
  setHomeShowExpired,
  setHomeShowCloseToExpiry,
  setHomeSortStoragesBy,
  setHomeDisplayStoragesAs,
  setHomeSortProductsBy,
  setHomeHighlightProducts,
  setHomeFilterProducts,
  setProductsSortProductsBy,
  setProductsHighlightProducts,
  setProductsFilterProducts,
  setLabelsSortLabelsBy,
  setLabelsDisplayLabelsAs,
  setShoppingListsSortListsBy,
} from "./slices/pages/slice";

export {
  // app actions
  setInitialLoad,
  setLanguage,
  addToast,
  removeToast,
  setTheme,
  toggleTheme,
  setGetSettingsLoading,
  getSettings,
  updateSettings,
  setSearch,
  hideMenus,
  setCreateMenu,
  setUploadMenu,
  showCreateMenu,
  hideUploadMenu,

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
  createCollectionOfProducts,

  // products actions
  getProducts,
  setProducts,
  createProduct,
  editProduct,
  deleteProduct,
  deleteProductsInStorage,
  swapStorage,
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
  setGetShoppingListItemsLoading,
  getShoppingListItems,
  createShoppingListItem,
  editShoppingListItem,
  deleteShopppingListItem,
  swapList,

  // pages
  setHomeShowExpired,
  setHomeShowCloseToExpiry,
  setHomeSortStoragesBy,
  setHomeDisplayStoragesAs,
  setHomeSortProductsBy,
  setHomeHighlightProducts,
  setHomeFilterProducts,
  setProductsSortProductsBy,
  setProductsHighlightProducts,
  setProductsFilterProducts,
  setLabelsSortLabelsBy,
  setLabelsDisplayLabelsAs,
  setShoppingListsSortListsBy,
};
