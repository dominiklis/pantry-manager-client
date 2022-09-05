import { Product } from "components";
import React from "react";

const ProductsList = ({ products, highlight }) => {
  return (
    <ul>
      {products.map((productId) => (
        <li key={productId}>
          <Product productId={productId} highlight={highlight} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
