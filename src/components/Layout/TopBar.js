import React from "react";
import styles from "./Topbar.module.css";
import { IoSearch } from "react-icons/io5";
import { useIsDarkTheme } from "hooks";

const Topbar = () => {
  const darkTheme = useIsDarkTheme();

  return (
    <div className={styles.container}>
      <div className={styles.searchInput}>
        <button className={styles.button} data-dark-theme={darkTheme}>
          <IoSearch />
        </button>
        <input className={styles.input} />
      </div>
    </div>
  );
};

export default Topbar;
