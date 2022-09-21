import React from "react";
import styles from "./ItemsList.module.css";

const ItemsList = ({ header, items, horizontalList }) => {
  const getListStyles = () => {
    let res = styles.list;

    if (horizontalList) res += ` ${styles.horizontalList}`;

    return res;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {header} ({items?.length ? items.length : 0})
      </div>
      <ul className={getListStyles()}>{items}</ul>
    </div>
  );
};

export default ItemsList;
