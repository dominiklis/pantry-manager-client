import { PageContainer, ProductsList } from "components";
import { useHandleProductsList, useScrollToElement } from "hooks";
import React from "react";

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
