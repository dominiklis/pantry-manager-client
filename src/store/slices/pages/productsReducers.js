import { localStorageKeys } from "constantStrings";

const productsReducers = {
  setProductsSortProductsBy: (state, action) => {
    state.products.sortProductsBy = action.payload;

    localStorage.setItem(
      localStorageKeys.pagesSettings.products.sortBy,
      action.payload
    );
  },
  setProductsHighlightProducts: (state, action) => {
    state.products.highlightProducts = action.payload;

    localStorage.setItem(
      localStorageKeys.pagesSettings.products.highlight,
      action.payload
    );
  },
  setProductsFilterProducts: (state, action) => {
    state.products.filterProducts = action.payload;
  },
};

export default productsReducers;
