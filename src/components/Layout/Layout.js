import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { useIsDarkTheme } from "hooks";

const Layout = () => {
  const darkTheme = useIsDarkTheme();

  return (
    <div className={styles.container} data-dark-theme={darkTheme}>
      <Outlet />
    </div>
  );
};

export default Layout;
