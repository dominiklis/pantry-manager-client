import React, { useState } from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { useIsDarkTheme } from "hooks";
import { useSelector } from "react-redux";
import AppName from "./AppName";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import { IoMenu } from "react-icons/io5";

const Layout = () => {
  const darkTheme = useIsDarkTheme();
  const { user } = useSelector((state) => state.users);

  const [hidden, setHidden] = useState(false);

  const handleHideMenu = () => setHidden(true);

  const handleOpenMenu = () => setHidden(false);

  if (!user || !user.userId) return <Outlet />;

  return (
    <div className={styles.container} data-dark-theme={darkTheme}>
      <div className={styles.appName}>
        <AppName />
      </div>
      <div className={styles.topBar}>
        <TopBar />
      </div>
      <Sidebar hidden={hidden} onHideMenu={handleHideMenu} />
      <div className={styles.content}>
        <Outlet />

        <button onClick={handleOpenMenu} className={styles.mobileMenuButton}>
          <IoMenu />
        </button>
      </div>
    </div>
  );
};

export default Layout;
