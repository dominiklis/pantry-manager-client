import React from "react";
import styles from "./LabelChip.module.css";
import { AppLink } from "components";

const LabelChip = ({ labelName, useButton, onClick }) => {
  if (useButton)
    return (
      <button className={styles.label} onClick={onClick} type="button">
        {labelName}
      </button>
    );

  return (
    <AppLink to={`labels/${labelName}`} className={styles.label}>
      {labelName}
    </AppLink>
  );
};

export default LabelChip;
