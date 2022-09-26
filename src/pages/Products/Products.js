import { PageContainer, ProductsList } from "components";
import { useHandleProductsList, useScrollToElement } from "hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCreateOverlay } from "store/actions";

const Products = () => {
  useScrollToElement();

  const {
    sortBy,
    highlight,
    filterBy,
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  } = useHandleProductsList({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCreateOverlay());
  }, [dispatch]);

  return (
    <PageContainer>
      <ProductsList
        sortBy={sortBy}
        onSortByChange={handleSortByChange}
        highlight={highlight}
        onHighlightChange={handleHighlightChange}
        filterBy={filterBy}
        onFilterByChange={handleFilterByChange}
        products={products}
      />
    </PageContainer>
  );
};

export default Products;
