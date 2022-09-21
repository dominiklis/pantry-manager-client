import React from "react";
import styles from "./ItemsList.module.css";

const ItemsList = ({ header, items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {header} ({items?.length ? items.length : 0})
      </div>
      <ul className={styles.list}>{items}</ul>
    </div>
  );
};

export default ItemsList;
