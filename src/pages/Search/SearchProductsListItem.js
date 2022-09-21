import { ProductHeader } from "components";
import { ProductLink } from "components/ProductLink";
import React from "react";
import { useSelector } from "react-redux";

const SearchProductsListItem = ({ product }) => {
  const color = useSelector(
    (state) => state.storages.byId[product?.storageId]?.color
  );

  return (
    <ProductLink product={product}>
      <ProductHeader
        storageId={product.storageId}
        productName={product.productName}
        amount={product.amount}
        unit={product.unit}
        storageColor={color}
      />
    </ProductLink>
  );
};

export default SearchProductsListItem;
