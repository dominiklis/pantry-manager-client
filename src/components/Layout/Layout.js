import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { IoAdd, IoMenu } from "react-icons/io5";
import {
  CreateAndUploadMenu,
  SideMenu,
  Topbar,
  useLayout,
} from "components/Layout";
import { CSSTransition } from "react-transition-group";
import sideMenuStyles from "./sideMenuStyles.module.css";
import createAndUploadMenuStyles from "./createAndUploadMenuStyles.module.css";
import {
  componentColors,
  componentSizes,
  screenSizesModes,
} from "constantStrings";
import { Button } from "components";

const Layout = () => {
  const {
    user,
    isDarkTheme,
    sideMenuRef,
    showSideMenu,
    screenSize,
    toggleSideMenu,
    createAndUploadMenuRef,
    isCreateMenuVisible,
    isUploadMenuVisible,
    hideCreateAndUploadMenu,
    showCreateAndUploadMenu,
  } = useLayout();

  if (!user || !user.userId) return <Outlet />;

  return (
    <div className={styles.container} data-dark-theme={isDarkTheme}>
      <div className={styles.wrapper}>
        <CSSTransition
          nodeRef={sideMenuRef}
          in={showSideMenu || screenSize !== screenSizesModes.mobile}
          timeout={200}
          classNames={sideMenuStyles}
          unmountOnExit
        >
          <div className={styles.sideMenu} ref={sideMenuRef}>
            <div className={styles.sideMenuBackdrop} onClick={toggleSideMenu} />
            <div className={styles.sideMenuWrapper}>
              <SideMenu toggleMenu={toggleSideMenu} />
            </div>
          </div>
        </CSSTransition>

        <div className={styles.content}>
          <Topbar />
          <Outlet />
        </div>

        <CSSTransition
          nodeRef={createAndUploadMenuRef}
          in={
            isCreateMenuVisible ||
            isUploadMenuVisible ||
            screenSize === screenSizesModes.wide
          }
          timeout={200}
          classNames={createAndUploadMenuStyles}
          unmountOnExit
        >
          <div
            className={styles.createAndUploadMenu}
            ref={createAndUploadMenuRef}
          >
            <div
              className={styles.createAndUploadMenuBackdrop}
              onClick={hideCreateAndUploadMenu}
            />

            <div className={styles.createAndUploadMenuWrapper}>
              <CreateAndUploadMenu screenSize={screenSize} />
            </div>
          </div>
        </CSSTransition>
      </div>

      <button onClick={toggleSideMenu} className={styles.mobileMenuButton}>
        <IoMenu />
      </button>

      <Button
        className={styles.floatingButton}
        iconButton
        icon={<IoAdd />}
        size={componentSizes.large}
        backgroundColor={componentColors.secondary}
        onClick={showCreateAndUploadMenu}
      />
    </div>
  );
};

export default Layout;
