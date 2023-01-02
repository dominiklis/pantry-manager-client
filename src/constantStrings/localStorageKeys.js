const localStorageKeys = {
  userTokenKey: "USER_TOKEN_KEY",
  language: "APP_LANGUAGE",
  theme: "APP_THEME",
  pagesSettings: {
    home: {
      sortStoragesBy: "HOME_SORTSTORAGESBY",
      displayStoragesAs: "HOME_DISPLAYSTORAGESAS",
      sortProductsBy: "HOME_SORTPRODUCTSBY",
      highlightProducts: "HOME_HIGHLIGHTPRODUCTS",
    },

    products: {
      sortBy: "PRODUCTS_SORTBY",
      highlight: "PRODUCTS_HIGHLIGHT",
    },

    storages: {
      sortBy: "STORAGES_SORTBY",
      displayAs: "STORAGES_DISPLAYAS",
    },

    labels: {
      sortBy: "LABELS_SORTBY",
      displayAs: "LABELS_DISPLAYAS",
    },

    shoppingLists: {
      sortBy: "SHOPPINGLISTS_SORTBY",
    },
  },
};

export default localStorageKeys;
