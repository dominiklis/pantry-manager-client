import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { IoAdd, IoMenu } from "react-icons/io5";
import {
  CreateAndUploadMenu,
  NavMenu,
  Topbar,
  useLayout,
} from "components/Layout";
import { CSSTransition } from "react-transition-group";
import sideMenuStyles from "./navMenuStyles.module.css";
import createAndUploadMenuStyles from "./createAndUploadMenuStyles.module.css";
import {
  componentColors,
  componentSizes,
  screenSizesModes,
} from "constantStrings";
import { Button, Translate } from "components";

const componentName = "Layout";

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
        <div className={styles.menus}>
          <div className={styles.menusWrapper}>
            <CSSTransition
              nodeRef={sideMenuRef}
              in={showSideMenu || screenSize !== screenSizesModes.mobile}
              timeout={200}
              classNames={sideMenuStyles}
              unmountOnExit
            >
              <div className={styles.navMenu} ref={sideMenuRef}>
                <div
                  className={styles.navMenuBackdrop}
                  onClick={toggleSideMenu}
                />
                <div className={styles.navMenuWrapper}>
                  <NavMenu toggleMenu={toggleSideMenu} />
                </div>
              </div>
            </CSSTransition>

            <Button
              className={styles.createButton}
              iconButton={screenSize !== screenSizesModes.wide}
              icon={<IoAdd />}
              size={
                screenSize !== screenSizesModes.wide
                  ? componentSizes.large
                  : null
              }
              backgroundColor={componentColors.secondary}
              onClick={showCreateAndUploadMenu}
            >
              <Translate section={componentName} text="createButton" />
            </Button>

            <CSSTransition
              nodeRef={createAndUploadMenuRef}
              in={isCreateMenuVisible || isUploadMenuVisible}
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
        </div>

        <div className={styles.content}>
          <Topbar />
          <Outlet />
        </div>
      </div>

      <button onClick={toggleSideMenu} className={styles.mobileMenuButton}>
        <IoMenu />
      </button>
    </div>
  );
};

export default Layout;
