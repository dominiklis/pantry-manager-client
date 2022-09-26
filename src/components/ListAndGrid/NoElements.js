import { Translate } from "components";
import React from "react";
import styles from "./NoElements.module.css";

const componentName = "ListAndGrid";

const NoElements = ({ emptyListInfo }) => {
  return (
    <p className={styles.noElements}>
      {emptyListInfo ? (
        emptyListInfo
      ) : (
        <Translate section={componentName} text="noElementsInfo" />
      )}
    </p>
  );
};

export default NoElements;
