import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./AppName.module.css";

const AppName = () => {
  const darkTheme = useIsDarkTheme();

  return (
    <div className={styles.container} data-dark-theme={darkTheme}>
      <span>Pantry Manager</span>
    </div>
  );
};

export default AppName;
