import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./Sidebar.module.css";
import { toggleTheme } from "store/actions";
import { useDispatch } from "react-redux";
import { IoClose, IoLogOut } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { Translate } from "components";
import { useSidebar } from "components/Layout";

const componentName = "Sidebar";

const Sidebar = ({ hidden, onHideMenu }) => {
  const darkTheme = useIsDarkTheme();

  let location = useLocation();
  const {
    items,
    getContainerStyles,
    getBackdropStyles,
    getItemStyles,
    handleLogout,
  } = useSidebar({
    componentName,
    pathname: location.pathname,
    hidden,
  });

  const dispatch = useDispatch();

  return (
    <nav className={getContainerStyles()} data-dark-theme={darkTheme}>
      <div className={styles.content} data-dark-theme={darkTheme}>
        <button
          onClick={onHideMenu}
          className={styles.hideButton}
          data-dark-theme={darkTheme}
        >
          <IoClose />
        </button>
        <ul>
          {items.map((item, index) => {
            const styles = getItemStyles(item.path);
            return (
              <li className={styles} data-dark-theme={darkTheme} key={index}>
                <Link to={item.path} key={index}>
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </li>
            );
          })}
          <li
            className={`${styles.sidebarItem} ${styles.sidebarItemWarning}`}
            data-dark-theme={darkTheme}
          >
            <button onClick={handleLogout}>
              <IoLogOut />
              <span>
                <Translate section={componentName} text="logout" />
              </span>
            </button>
          </li>
        </ul>
        <button
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          toggle theme
        </button>
      </div>
      <div className={getBackdropStyles()} onClick={onHideMenu} />
    </nav>
  );
};

export default Sidebar;
