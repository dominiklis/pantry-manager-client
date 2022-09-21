import { AppLink, StorageIndicator, Translate } from "components";
import React from "react";
import styles from "./StorageHeader.module.css";

const componentName = "StorageHeader";

const StorageHeader = ({
  storageId,
  storageName,
  color,
  numberOfDaysForWarning,
  showDaysInStorageHeader,
}) => {
  if (!storageId)
    return <span className={styles.container}>{storageName}</span>;

  return (
    <AppLink to={`/storages/${storageId}`} className={styles.container}>
      <StorageIndicator icon color={color} />
      {storageName}
      {showDaysInStorageHeader ? (
        <span className={styles.daysInformation}>
          (
          <Translate
            section={componentName}
            text="warningFor"
            additionalText={`${numberOfDaysForWarning}d`}
          />
          )
        </span>
      ) : (
        ""
      )}
    </AppLink>
  );
};

export default StorageHeader;
