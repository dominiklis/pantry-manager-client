import { Translate } from "components";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./StorageDetails.module.css";

const componentName = "StorageDetails";

const StorageDetails = ({
  numberOfDaysForWarning,
  defaultNumberOfDaysForWarning,
  ownerId,
}) => {
  const { userId } = useSelector((state) => state.users.user);

  return (
    <div className={styles.warningInfo}>
      {ownerId !== userId ? (
        <p>
          <Translate section={componentName} text="storageIsShared" />
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
