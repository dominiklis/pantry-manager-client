const productsReducers = {
  setProductsSortProductsBy: (state, action) => {
    state.products.sortProductsBy = action.payload;
  },
  setProductsHighlightProducts: (state, action) => {
    state.products.highlightProducts = action.payload;
  },
  setProductsFilterProducts: (state, action) => {
    state.products.filterProducts = action.payload;
  },
};

export default productsReducers;
