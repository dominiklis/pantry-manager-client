import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./ShoppingListItemHeader.module.css";

const ShoppingListItemHeader = ({ shoppingListItemName, amount, selected }) => {
  const darkTheme = useIsDarkTheme();

  const getContainerStyles = () => {
    let res = styles.container;

    if (selected) res += ` ${styles.selected}`;

    return res;
  };

  return (
    <div className={getContainerStyles()} data-dark-theme={darkTheme}>
      <span>{shoppingListItemName}</span>
      <span className={styles.amount}>{amount}</span>
    </div>
  );
};

export default ShoppingListItemHeader;
