import { Accordion } from "components";
import React from "react";
import styles from "./ItemsList.module.css";

const ItemsList = ({ header, items, horizontalList }) => {
  const getListStyles = () => {
    let res = styles.list;

    if (horizontalList && items?.length) res += ` ${styles.horizontalList}`;

    return res;
  };

  return (
    <Accordion
      initiallyOpen
      header={
        <div className={styles.header}>
          {header} ({items?.length ? items.length : 0})
        </div>
      }
    >
      <ul className={getListStyles()}>{items}</ul>
    </Accordion>
  );
};

export default ItemsList;
