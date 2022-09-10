import { Translate } from "components";
import {
  ProductsList,
  Toolbar,
  useProductsWithoutStoragesList,
} from "components/ProductsWithoutStoragesList";
import { filterProductsBy } from "constantStrings";
import React from "react";

import styles from "./ProductsWithoutStoragesList.module.css";

const componentName = "ProductsWithoutStoragesList";

const ProductsWithoutStoragesList = ({ className, selectedProduct }) => {
  const {
    sortBy,
    highlight,
    filterBy,
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
    getContainerStyles,
  } = useProductsWithoutStoragesList({ className });

  if (!products?.length && filterBy === filterProductsBy.all) return null;

  return (
    <div className={getContainerStyles()}>
      <div className={styles.header}>
        <Translate section={componentName} text="header" />
      </div>

      <Toolbar
        sortBy={sortBy}
        onSortByChange={handleSortByChange}
        highlight={highlight}
        onHighlightChange={handleHighlightChange}
        filterBy={filterBy}
        onFilterByChange={handleFilterByChange}
      />

      <ProductsList
        products={products}
        highlight={highlight}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default ProductsWithoutStoragesList;
