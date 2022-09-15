import { ListAndGrid, Translate } from "components";
import { useStoragesList } from "components/StoragesList";
import React from "react";
import styles from "./StoragesList.module.css";

const componentName = "StoragesList";

const StoragesList = ({ className, noHeader }) => {
  const {
    elements,
    sortBy,
    setSortBy,
    displayAs,
    setDisplayAs,
    getContainerStyles,
  } = useStoragesList({ className });

  return (
    <div className={getContainerStyles()}>
      {noHeader ? null : (
        <div className={styles.header}>
          <Translate section={componentName} text="header" />
        </div>
      )}

      <ListAndGrid
        elements={elements}
        sortBy={sortBy}
        setSortBy={setSortBy}
        displayAs={displayAs}
        setDisplayAs={setDisplayAs}
      />
    </div>
  );
};

export default StoragesList;
