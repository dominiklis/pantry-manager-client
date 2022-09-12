import { Product } from "components";
import { Toolbar } from "components/ProductsList";
import React from "react";

const ProductsList = ({
  sortBy,
  onSortByChange,
  highlight,
  onHighlightChange,
  filterBy,
  onFilterByChange,
  products,
  selectedProduct,
}) => {
  return (
    <>
      <Toolbar
        sortBy={sortBy}
        onSortByChange={onSortByChange}
        highlight={highlight}
        onHighlightChange={onHighlightChange}
        filterBy={filterBy}
        onFilterByChange={onFilterByChange}
      />

      <ul>
        {products.map((productId) => (
          <li key={productId}>
            <Product
              productId={productId}
              highlight={highlight}
              initiallyOpen={productId === selectedProduct}
              open={productId === selectedProduct}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
