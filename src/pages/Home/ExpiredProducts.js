import { Translate } from "components";
import { componentColors } from "constantStrings";
import {
  ProductsGroupedByStorages,
  useExpiredProducts,
  WarningContainer,
} from "pages/Home";
import React from "react";

const componentName = "ExpiredProducts";

const ExpiredProducts = () => {
  const { expiredProducts, storages, productsGroupedByStorages } =
    useExpiredProducts();

  if (!expiredProducts?.length) return null;

  return (
    <WarningContainer
      header={
        <>
          <Translate section={componentName} text="header" /> (
          {expiredProducts.length})
        </>
      }
      headerType="error"
    >
      <ProductsGroupedByStorages
        storages={storages}
        productsGroupedByStorages={productsGroupedByStorages}
        daysColor={componentColors.error}
      />
    </WarningContainer>
  );
};

export default ExpiredProducts;
