import { Translate } from "components";
import {
  DisplayAsButton,
  List,
  SortByButton,
  useStoragesList,
} from "components/StoragesList";
import { sortStoragesBy, displayAs as displayAsValues } from "constantStrings";
import React from "react";
import styles from "./StoragesList.module.css";

const componentName = "StoragesList";

const StoragesList = ({ className, noHeader }) => {
  const {
    sortBy,
    displayAs,
    storages,
    handleSortByButton,
    handleDisplayAsButton,
    getContainerStyles,
  } = useStoragesList({ className });

  return (
    <div className={getContainerStyles()}>
      {noHeader ? null : (
        <div className={styles.header}>
          <Translate section={componentName} text="header" />
        </div>
      )}

      <div className={styles.toolbar}>
        <SortByButton
          onClick={handleSortByButton}
          sortingAsc={sortBy === sortStoragesBy.sortByNameAsc}
        />
        <DisplayAsButton
          onClick={handleDisplayAsButton}
          displayAsList={displayAs === displayAsValues.list}
        />
      </div>

      <List
        storages={storages}
        displayAsGrid={displayAs === displayAsValues.grid}
      />
    </div>
  );
};

export default StoragesList;
