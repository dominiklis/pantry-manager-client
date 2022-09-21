import { Accordion, ProductHeader } from "components";
import { ProductActions, useProduct } from "components/Product";
import ProductDetails from "components/Product/ProductDetails";
import React from "react";
import styles from "./Product.module.css";

const Product = ({ productId, highlight, initiallyOpen, open }) => {
  const {
    darkTheme,
    product,
    storage,
    closeToExpiry,
    expired,
    numberOfDaysForWarning,
  } = useProduct({ productId });

  return (
    <div
      className={styles.container}
      id={productId}
      data-dark-theme={darkTheme}
    >
      <Accordion
        open={open}
        initiallyOpen={initiallyOpen}
        header={
          <ProductHeader
            productName={product.productName}
            storageColor={storage?.color}
            amount={product.amount}
            unit={product.unit}
            highlight={highlight}
            closeToExpiry={closeToExpiry}
            expired={expired}
          />
        }
      >
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
      </Accordion>
    </div>
  );
};

export default Product;
