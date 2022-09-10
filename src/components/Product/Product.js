import { ProductActions, ProductHeader, useProduct } from "components/Product";
import ProductDetails from "components/Product/ProductDetails";
import { useAccordion } from "hooks";
import React, { useEffect } from "react";
import styles from "./Product.module.css";

const Product = ({ productId, highlight, initiallyOpen, open }) => {
  const { product, storage, closeToExpiry, expired, numberOfDaysForWarning } =
    useProduct({ productId });

  const { toggleShowContent, getContentStyles, openAccordion } = useAccordion({
    initiallyOpen: initiallyOpen ?? false,
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") toggleShowContent();
  };

  useEffect(() => {
    if (open) openAccordion();
  }, [open]);

  return (
    <div
      className={styles.container}
      tabIndex={1}
      onKeyDown={handleKeyDown}
      id={productId}
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
