import { AppLink } from "components";
import { useIsDarkTheme } from "hooks";
import React from "react";
import { useSelector } from "react-redux";
import linkStyles from "styles/links.module.css";
import { getDaysFromTodayText } from "utils";
import styles from "./ProductsListItem.module.css";

const ProductsListItem = ({ product, daysColor }) => {
  const darkTheme = useIsDarkTheme();

  const { language } = useSelector((state) => state.app);

  const getDaysStyles = () => {
    let res = styles.days;

    switch (daysColor) {
      case "error":
        res += ` ${styles.error}`;
        break;

      case "warning":
        res += ` ${styles.warning}`;
        break;

      default:
        break;
    }

    return res;
  };

  if (!product.storageId)
    return (
      <a
        href={`#${product.productId}`}
        className={`${linkStyles.link} ${linkStyles.white}`}
      >
        {product.productName}
        <span className={getDaysStyles()} data-dark-theme={darkTheme}>
          {getDaysFromTodayText(product.expirationDate, language)}
        </span>
      </a>
    );

  return (
    <AppLink to={`storages/${product.storageId}#${product.productId}`}>
      {product.productName}
      <span className={getDaysStyles()} data-dark-theme={darkTheme}>
        {getDaysFromTodayText(product.expirationDate, language)}
      </span>
    </AppLink>
  );
};

export default ProductsListItem;
