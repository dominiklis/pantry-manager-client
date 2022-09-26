import { Translate } from "components";
import React from "react";
import styles from "./NoProductsToDisplay.module.css";

const componentName = "NoProductsToDisplay";

const NoProductsToDisplay = () => {
  return (
    <p className={styles.noProducts}>
      <Translate section={componentName} text="noProductsInfo" />
    </p>
  );
};

export default NoProductsToDisplay;
