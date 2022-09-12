import { StorageIndicator } from "components";
import { highlightProducts } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./ProductHeader.module.css";

const ProductHeader = ({
  toggleShowContent,
  productName,
  storageColor,
  amount,
  unit,
  highlight,
  closeToExpiry,
  expired,
}) => {
  const darkTheme = useIsDarkTheme();

  const getNameStyles = () => {
    switch (highlight) {
      default:
        break;

      case highlightProducts.closeToExpiry:
        if (closeToExpiry) return styles.warning;
        break;

      case highlightProducts.expired:
        if (expired) return styles.error;
        break;

      case highlightProducts.all:
        if (closeToExpiry) return styles.warning;
        if (expired) return styles.error;
        break;
    }
  };

  return (
    <div
      className={styles.header}
      onClick={toggleShowContent}
      data-dark-theme={darkTheme}
    >
      <StorageIndicator color={storageColor} />
      <span className={getNameStyles()} data-dark-theme={darkTheme}>
        {productName}
      </span>
      <span className={styles.amountAndUnit}>
        {amount} {unit}
      </span>
    </div>
  );
};

export default ProductHeader;
