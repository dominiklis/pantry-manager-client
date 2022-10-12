import { ListAndGrid, Translate } from "components";
import { useStoragesList } from "components/StoragesList";
import React from "react";
import styles from "./StoragesList.module.css";

const componentName = "StoragesList";

const StoragesList = ({
  className,
  noHeader,
  sortBy,
  displayAs,
  setSortByDispatchAction,
  setDisplayAsDispatchAction,
}) => {
  const { elements, getContainerStyles } = useStoragesList({
    className,
    sortBy,
    displayAs,
  });

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
        displayAs={displayAs}
        setSortByDispatchAction={setSortByDispatchAction}
        setDisplayAsDispatchAction={setDisplayAsDispatchAction}
        emptyListInfo={
          <Translate section={componentName} text="noStoragesInfo" />
        }
      />
    </div>
  );
};

export default StoragesList;
