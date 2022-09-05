import { Button } from "components";
import { componentColors } from "constantStrings";
import React from "react";
import { IoClose } from "react-icons/io5";
import styles from "./ProductAction.module.css";

const ProductAction = ({ children, onClose, header }) => {
  return (
    <div className={styles.container}>
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
};

export default ProductAction;
