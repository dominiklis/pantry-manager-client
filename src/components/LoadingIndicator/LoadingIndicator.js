import { componentColors, componentSizes, themes } from "constantStrings";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./LoadingIndicator.module.css";

const LoadingIndicator = ({ size, color }) => {
  const { theme } = useSelector((state) => state.app);
  const darkTheme = theme === themes.dark;

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
