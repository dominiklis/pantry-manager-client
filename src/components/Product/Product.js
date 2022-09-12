import { ProductActions, ProductHeader, useProduct } from "components/Product";
import ProductDetails from "components/Product/ProductDetails";
import { useAccordion, useIsDarkTheme } from "hooks";
import React from "react";

const Product = ({ productId, highlight, initiallyOpen, open }) => {
  const darkTheme = useIsDarkTheme();

  const { toggleShowContent, getContentStyles, openAccordion } = useAccordion({
    initiallyOpen: initiallyOpen ?? false,
  });

  const {
    product,
    storage,
    closeToExpiry,
    expired,
    numberOfDaysForWarning,
    handleKeyDown,
    getContainerStyles,
  } = useProduct({
    productId,
    toggleShowContent,
    open,
    openAccordion,
    initiallyOpen,
  });

  return (
    <div
      className={getContainerStyles()}
      tabIndex={1}
      onKeyDown={handleKeyDown}
      id={productId}
      data-dark-theme={darkTheme}
    >
      <ProductHeader
        toggleShowContent={toggleShowContent}
        productName={product.productName}
        storageColor={storage?.color}
        amount={product.amount}
        unit={product.unit}
        highlight={highlight}
        closeToExpiry={closeToExpiry}
        expired={expired}
      />
      <div className={getContentStyles()}>
        <ProductDetails
          productName={product.productName}
          expirationDate={product.expirationDate}
          defaultNumberOfDaysForWarning={numberOfDaysForWarning}
          storageId={storage?.storageId}
          storageColor={storage?.color}
          storageName={storage?.storageName}
          labels={product.labels}
        />

        <ProductActions productId={product.productId} />
      </div>
    </div>
  );
};

export default Product;
