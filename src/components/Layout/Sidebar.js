import { useIsDarkTheme } from "hooks";
import React, { useMemo } from "react";
import styles from "./Sidebar.module.css";
import { toggleTheme } from "store/actions";
import { useDispatch } from "react-redux";
import {
  IoAdd,
  IoAlbumsOutline,
  IoBookmarkOutline,
  IoClipboardOutline,
  IoClose,
  IoFastFood,
  IoHomeOutline,
  IoLogOut,
  IoSettingsSharp,
} from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { Translate } from "components";

const componentName = "Sidebar";

const Sidebar = ({ hidden, onHideMenu }) => {
  const dispatch = useDispatch();
  const darkTheme = useIsDarkTheme();

  const items = useMemo(() => {
    return [
      {
        path: "/",
        icon: <IoHomeOutline />,
        text: <Translate section={componentName} text="myPantry" />,
      },
      {
        path: "/products",
        icon: <IoFastFood />,
        text: <Translate section={componentName} text="products" />,
      },
      {
        path: "/storages",
        icon: <IoAlbumsOutline />,
        text: <Translate section={componentName} text="storages" />,
      },
      {
        path: "/labels",
        icon: <IoBookmarkOutline />,
        text: <Translate section={componentName} text="labels" />,
      },
      {
        path: "/lists",
        icon: <IoClipboardOutline />,
        text: <Translate section={componentName} text="shoppingLists" />,
      },
      {
        path: "/settings",
        icon: <IoSettingsSharp />,
        text: <Translate section={componentName} text="settings" />,
      },
    ];
  }, []);

  const getContainerStyles = () => {
    let res = styles.container;

    if (hidden) res += ` ${styles.hidden}`;

    return res;
  };

  const getBackdropStyles = () => {
    let res = styles.backdrop;

    if (hidden) res += ` ${styles.hidden}`;

    return res;
  };

  let location = useLocation();

  const getItemStyles = (path) => {
    let res = styles.sidebarItem;

    if (location.pathname.split("/")[1] === path?.split("/")[1]) {
      res += ` ${styles.sidebarItemSelected}`;
    }

    return res;
  };

  return (
    <nav className={getContainerStyles()} data-dark-theme={darkTheme}>
      <div className={styles.content}>
        <button
          onClick={onHideMenu}
          className={styles.hideButton}
          data-dark-theme={darkTheme}
        >
          <IoClose />
        </button>
        <ul>
          <li
            className={`${styles.sidebarItem} ${styles.sidebarItemSecondary} ${styles.hideOnMobile}`}
            data-dark-theme={darkTheme}
          >
            <button>
              <IoAdd />
              <span>Create</span>
            </button>
          </li>
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
            <button>
              <IoLogOut />
              <span>Logout</span>
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
