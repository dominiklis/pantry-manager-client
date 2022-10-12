import { Translate } from "components";
import { componentColors } from "constantStrings";
import {
  ProductsGroupedByStorages,
  useCloseToExpiryProducts,
  WarningContainer,
} from "pages/Home";
import React from "react";
import { setHomeShowCloseToExpiry } from "store/actions";

const componentName = "CloseToExpiryProducts";

const CloseToExpiryProducts = () => {
  const {
    productsCloseToExpiry,
    storages,
    productsGroupedByStorages,
    showCloseToExpiry,
  } = useCloseToExpiryProducts();

  if (!productsCloseToExpiry?.length) return null;

  return (
    <WarningContainer
      showContent={showCloseToExpiry}
      dispatchAction={setHomeShowCloseToExpiry}
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
