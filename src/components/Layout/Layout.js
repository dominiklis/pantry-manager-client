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
  UploadOverlay,
  useLayout,
} from "components/Layout";
import { CSSTransition } from "react-transition-group";
import overlayStyles from "./overlayStyles.module.css";

const Layout = () => {
  const {
    user,
    darkTheme,
    hidden,
    handleHideMenu,
    handleOpenMenu,
    createOverlayRef,
    uploadOverlayRef,
    isCreateOverlayVisible,
    isUploadOverlayVisible,
    handleShowCreateOverlay,
    handleHideCreateOverlay,
    handleHideUploadOverlay,
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
        nodeRef={createOverlayRef}
        in={isCreateOverlayVisible}
        timeout={200}
        classNames={overlayStyles}
        unmountOnExit
      >
        <CreateOverlay
          ref={createOverlayRef}
          onHideButtonClick={handleHideCreateOverlay}
        />
      </CSSTransition>

      <CSSTransition
        nodeRef={uploadOverlayRef}
        in={isUploadOverlayVisible}
        timeout={200}
        classNames={overlayStyles}
        unmountOnExit
      >
        <UploadOverlay
          ref={uploadOverlayRef}
          onHideButtonClick={handleHideUploadOverlay}
        />
      </CSSTransition>
    </div>
  );
};

export default Layout;
