import { PageContainer, ProductsList } from "components";
import { useHandleProductsList, useScrollToElement } from "hooks";
import React from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { hash } = useLocation();
  useScrollToElement(hash?.replace("#", ""));

  const {
    sortBy,
    highlight,
    filterBy,
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  } = useHandleProductsList({});

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
        selectedProduct={hash?.replace("#", "")}
      />
    </PageContainer>
  );
};

export default Products;
