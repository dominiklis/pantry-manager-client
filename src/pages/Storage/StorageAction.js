import { Button } from "components";
import { componentColors } from "constantStrings";
import React, { forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./StorageAction.module.css";

const StorageAction = forwardRef(({ children, onClose, header }, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.header}>
        <span className={styles.headerText}>{header}</span>
        <Button
          icon={<IoClose />}
          iconButton
          backgroundColor={componentColors.transparent}
          onClick={onClose}
        />
      </div>
      {children}
    </div>
  );
});

export default StorageAction;
