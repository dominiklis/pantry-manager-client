import { Translate } from "components";
import { componentColors } from "constantStrings";
import {
  ProductsGroupedByStorages,
  useCloseToExpiryProducts,
  WarningContainer,
} from "pages/Home";
import React from "react";

const componentName = "CloseToExpiryProducts";

const CloseToExpiryProducts = () => {
  const { productsCloseToExpiry, storages, productsGroupedByStorages } =
    useCloseToExpiryProducts();

  if (!productsCloseToExpiry?.length) return null;

  return (
    <WarningContainer
      header={
        <>
          <Translate section={componentName} text="header" /> (
          {productsCloseToExpiry.length})
        </>
      }
      headerType="warning"
    >
      <ProductsGroupedByStorages
        storages={storages}
        productsGroupedByStorages={productsGroupedByStorages}
        daysColor={componentColors.warning}
        showDaysInStorageHeader
      />
    </WarningContainer>
  );
};

export default CloseToExpiryProducts;
