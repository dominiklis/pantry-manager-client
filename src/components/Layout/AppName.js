import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./AppName.module.css";

const AppName = () => {
  const darkTheme = useIsDarkTheme();

  return (
    <div className={styles.appName} data-dark-theme={darkTheme}>
      Pantry Manager
    </div>
  );
};

export default AppName;
