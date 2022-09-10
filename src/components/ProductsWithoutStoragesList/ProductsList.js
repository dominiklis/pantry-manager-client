import { Product } from "components";
import React from "react";

const ProductsList = ({ products, highlight, selectedProduct }) => {
  return (
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
  );
};

export default ProductsList;
