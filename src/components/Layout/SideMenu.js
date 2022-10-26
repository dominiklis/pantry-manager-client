import React from "react";
import styles from "./SideMenu.module.css";
import { IoClose, IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Translate } from "components";
import { AppName, SearchForm, useSideMenu } from "components/Layout";

const componentName = "Sidebar";

const Sidebar = ({ toggleMenu }) => {
  const { darkTheme, items, getItemStyles, handleLogout } = useSideMenu({
    componentName,
  });

  return (
    <nav
      className={styles.container}
      data-dark-theme={darkTheme}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={styles.hideButton}
        onClick={toggleMenu}
        data-dark-theme={darkTheme}
      >
        <IoClose />
      </button>
      <div className={styles.appName}>
        <AppName />
      </div>

      <ul className={styles.menuItemsList}>
        <li className={styles.searchItem}>
          <SearchForm alternativeStyles />
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
          <button onClick={handleLogout}>
            <IoLogOut />
            <span>
              <Translate section={componentName} text="logout" />
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
