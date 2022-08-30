import { useIsDarkTheme } from "hooks";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import styles from "./LoadingIndicator.module.css";

const LoadingIndicator = ({ size, color }) => {
  const darkTheme = useIsDarkTheme();

  const getStyles = () => {
    let res = styles.indicator;

    if (color === componentColors.secondary) {
      res += ` ${styles.secondary}`;
    }

    switch (size) {
      case componentSizes.medium:
        res += ` ${styles.medium}`;
        break;

      case componentSizes.large:
        res += ` ${styles.large}`;
        break;

      default:
        break;
    }

    return res;
  };

  return <div className={getStyles()} data-dark-theme={darkTheme}></div>;
};

export default LoadingIndicator;
