import React from "react";
import styles from "./Topbar.module.css";
import { AppName, SearchForm } from "components/Layout";
import { useIsDarkTheme } from "hooks";

const Topbar = () => {
  const isDarkTheme = useIsDarkTheme();

  return (
    <div className={styles.container}>
      <div className={styles.appName} data-dark-theme={isDarkTheme}>
        <AppName />
      </div>
      <div className={styles.searchForm}>
        <SearchForm />
      </div>
    </div>
  );
};

export default Topbar;
