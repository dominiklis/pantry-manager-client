import { StorageIndicator } from "components";
import { componentSizes } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./ColorButton.module.css";

const ColorButton = ({ onClick, color }) => {
  const darkTheme = useIsDarkTheme();

  return (
    <button
      onClick={onClick}
      type="button"
      className={styles.button}
      data-dark-theme={darkTheme}
    >
      <StorageIndicator
        color={color}
        size={componentSizes.veryLarge}
        transparentBorder
      />
    </button>
  );
};

export default ColorButton;
