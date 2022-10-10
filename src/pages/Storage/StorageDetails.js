import { Translate } from "components";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./StorageDetails.module.css";

const componentName = "StorageDetails";

const StorageDetails = ({
  numberOfDaysForWarning,
  defaultNumberOfDaysForWarning,
  ownerId,
  ownerName,
}) => {
  const { userId } = useSelector((state) => state.users.user);

  return (
    <div className={styles.warningInfo}>
      {ownerId !== userId ? (
        <p>
          <Translate section={componentName} text="storageIsShared" />
          <span className={styles.ownerName}>{ownerName}</span>
        </p>
      ) : null}
      <p>
        <Translate section={componentName} text="warningInfoText" />

        <span className={styles.days}>
          {numberOfDaysForWarning
            ? ` ${numberOfDaysForWarning}`
            : ` ${defaultNumberOfDaysForWarning} ${"(default value)"}`}
        </span>
      </p>
    </div>
  );
};

export default StorageDetails;
