import { Accordion, Button, Dropdown, ProductHeader } from "components";
import {
  ProductActions,
  ProductActionsButtons,
  useProduct,
} from "components/Product";
import ProductDetails from "components/Product/ProductDetails";
import { componentColors, componentSizes } from "constantStrings";
import { useIsSmallScreen } from "hooks";
import React, { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
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

  const [selectedAction, setSelectedAction] = useState(-11);
  const handleCloseAction = () => setSelectedAction(-1);

  const smallScreen = useIsSmallScreen();

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
        hideHeaderActionsOnClosed
        headerActions={
          smallScreen ? (
            <Dropdown
              hideOnClick
              dropdownButton={
                <Button
                  iconButton
                  icon={<IoEllipsisVertical />}
                  backgroundColor={componentColors.transparent}
                  size={componentSizes.small}
                />
              }
              dropdownContent={
                <ProductActionsButtons
                  productId={productId}
                  setSelectedAction={setSelectedAction}
                />
              }
            />
          ) : null
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

        <ProductActions
          productId={product.productId}
          actionButtons={
            <ProductActionsButtons
              productId={productId}
              setSelectedAction={setSelectedAction}
            />
          }
          selectedAction={selectedAction}
          onCloseAction={handleCloseAction}
        />
      </Accordion>
    </div>
  );
};

export default Product;
