import { LoadingIndicator } from "components";
import { componentSizes } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./LoadingPage.module.css";

const LoadingPage = () => {
  const darkTheme = useIsDarkTheme();

  return (
    <div className={styles.container} data-dark-theme={darkTheme}>
      <LoadingIndicator size={componentSizes.large} />
    </div>
  );
};

export default LoadingPage;
