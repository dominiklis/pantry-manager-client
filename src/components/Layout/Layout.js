import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import {
  AppName,
  CreateOverlay,
  FloatingButton,
  Sidebar,
  Topbar,
  useLayout,
} from "components/Layout";
import { CSSTransition } from "react-transition-group";
import overlayStyles from "./Overlay.module.css";

const Layout = () => {
  const {
    user,
    darkTheme,
    hidden,
    handleHideMenu,
    handleOpenMenu,
    overlayRef,
    isCreateOverlayVisible,
    handleShowCreateOverlay,
    handleHideCreateOverlay,
  } = useLayout();

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

      <FloatingButton onClick={handleShowCreateOverlay} />

      <CSSTransition
        nodeRef={overlayRef}
        in={isCreateOverlayVisible}
        timeout={200}
        classNames={overlayStyles}
        unmountOnExit
      >
        <CreateOverlay
          ref={overlayRef}
          onHideButtonClick={handleHideCreateOverlay}
        />
      </CSSTransition>
    </div>
  );
};

export default Layout;
