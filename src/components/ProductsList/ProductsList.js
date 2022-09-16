import { Product } from "components";
import { NoProductsToDisplay, Toolbar } from "components/ProductsList";
import React from "react";
import { useLocation } from "react-router-dom";

const ProductsList = ({
  sortBy,
  onSortByChange,
  highlight,
  onHighlightChange,
  filterBy,
  onFilterByChange,
  products,
}) => {
  const { hash } = useLocation();
  const selectedProduct = hash?.replace("#", "");

  if (!products || !products.length) {
    return <NoProductsToDisplay />;
  }

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
        {products.map((product) => {
          if (typeof product === "string") {
            return (
              <li key={product}>
                <Product
                  productId={product}
                  highlight={highlight}
                  initiallyOpen={product === selectedProduct}
                  open={product === selectedProduct}
                />
              </li>
            );
          }

          return (
            <li key={product.productId}>
              <Product
                productId={product.productId}
                highlight={highlight}
                initiallyOpen={product.productId === selectedProduct}
                open={product.productId === selectedProduct}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsList;
