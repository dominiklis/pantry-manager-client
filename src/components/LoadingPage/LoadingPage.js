import { LoadingIndicator } from "components";
import { componentSizes, themes } from "constantStrings";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./LoadingPage.module.css";

const LoadingPage = () => {
  const { theme } = useSelector((state) => state.app);
  const darkTheme = theme === themes.dark;

  return (
    <div className={styles.container} data-dark-theme={darkTheme}>
      <LoadingIndicator size={componentSizes.large} />
    </div>
  );
};

export default LoadingPage;
