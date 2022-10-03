import { Translate } from "components";
import React from "react";
import styles from "./NoItemsToDisplay.module.css";

const componentName = "NoItemsToDisplay";

const NoItemsToDisplay = () => {
  return (
    <div className={styles.noItemsInfo}>
      <Translate section={componentName} text="noItemsInfo" />
    </div>
  );
};

export default NoItemsToDisplay;
