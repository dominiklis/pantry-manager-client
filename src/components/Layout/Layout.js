import React, { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { useIsDarkTheme } from "hooks";
import { useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import {
  AppName,
  CreateOverlay,
  FloatingButton,
  Sidebar,
  Topbar,
} from "components/Layout";
import { various } from "constantStrings";
import { CSSTransition } from "react-transition-group";
import overlayStyles from "./Overlay.module.css";

const Layout = () => {
  const darkTheme = useIsDarkTheme();
  const { user } = useSelector((state) => state.users);

  const [hidden, setHidden] = useState(false);
  const [showCreateOverlay, setShowCreateOverlay] = useState(false);

  const handleHideMenu = () => setHidden(true);

  const handleOpenMenu = () => setHidden(false);

  const handleShowCreate = () => setShowCreateOverlay(true);

  const handleHideCreate = () => setShowCreateOverlay(false);

  const overlayRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= various.smallScreen) setHidden(true);
  }, []);

  if (!user || !user.userId) return <Outlet />;

  return (
    <div className={styles.container} data-dark-theme={darkTheme}>
      <div className={styles.appName}>
        <AppName />
      </div>

      <div className={styles.topBar}>
        <Topbar />
      </div>

      <Sidebar hidden={hidden} onHideMenu={handleHideMenu} />

      <div className={styles.content}>
        <Outlet />

        <button onClick={handleOpenMenu} className={styles.mobileMenuButton}>
          <IoMenu />
        </button>
      </div>

      <FloatingButton onClick={handleShowCreate} />

      <CSSTransition
        nodeRef={overlayRef}
        in={showCreateOverlay}
        timeout={200}
        classNames={overlayStyles}
        unmountOnExit
      >
        <CreateOverlay ref={overlayRef} onHideButtonClick={handleHideCreate} />
      </CSSTransition>
    </div>
  );
};

export default Layout;
