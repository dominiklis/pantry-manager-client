import { PageContainer, ProductsList } from "components";
import { useHandleProductsList, useScrollToElement } from "hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCreateOverlay,
  setProductsFilterProducts,
  setProductsHighlightProducts,
  setProductsSortProductsBy,
} from "store/actions";

const Products = () => {
  useScrollToElement();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCreateOverlay());
  }, [dispatch]);

  const { sortProductsBy, highlightProducts, filterProducts } = useSelector(
    (state) => state.pages.products
  );

  const {
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  } = useHandleProductsList({
    sortBy: sortProductsBy,
    filterBy: filterProducts,
    setSortByDispatchAction: setProductsSortProductsBy,
    setHighlightDispatchAction: setProductsHighlightProducts,
    setFilterByDispatchAction: setProductsFilterProducts,
  });

  return (
    <PageContainer>
      <ProductsList
        sortBy={sortProductsBy}
        highlight={highlightProducts}
        filterBy={filterProducts}
        onSortByChange={handleSortByChange}
        onHighlightChange={handleHighlightChange}
        onFilterByChange={handleFilterByChange}
        products={products}
      />
    </PageContainer>
  );
};

export default Products;
