import { ProductsList, Translate } from "components";
import { filterProductsBy } from "constantStrings";
import { useHandleProductsList } from "hooks";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./ProductsWithoutStoragesList.module.css";

const componentName = "ProductsWithoutStoragesList";

const ProductsWithoutStoragesList = ({
  className,
  sortBy,
  highlight,
  filterBy,
  setSortByDispatchAction,
  setHighlightDispatchAction,
  setFilterByDispatchAction,
}) => {
  const { defaultStorageId } = useSelector((state) => state.users.user);

  const {
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  } = useHandleProductsList({
    selectProductsOptions: {
      storageId: defaultStorageId,
    },
    sortBy,
    filterBy,
    setSortByDispatchAction,
    setHighlightDispatchAction,
    setFilterByDispatchAction,
  });

  const getContainerStyles = () => {
    let res = "";

    if (className) res += ` ${className}`;

    return res;
  };

  if (!products?.length && filterBy === filterProductsBy.all) return null;

  return (
    <div className={getContainerStyles()}>
      <div className={styles.header}>
        <Translate section={componentName} text="header" />
      </div>

      <ProductsList
        sortBy={sortBy}
        onSortByChange={handleSortByChange}
        highlight={highlight}
        onHighlightChange={handleHighlightChange}
        filterBy={filterBy}
        onFilterByChange={handleFilterByChange}
        products={products}
      />
    </div>
  );
};

export default ProductsWithoutStoragesList;
