import { Button } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoAdd } from "react-icons/io5";
import styles from "./FloatingButton.module.css";

const FloatingButton = ({ onClick }) => {
  return (
    <Button
      className={styles.floatingButton}
      iconButton
      icon={<IoAdd />}
      size={componentSizes.large}
      backgroundColor={componentColors.secondary}
      onClick={onClick}
    />
  );
};

export default FloatingButton;
