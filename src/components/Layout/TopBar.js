import React from "react";
import styles from "./Topbar.module.css";
import { SearchForm } from "components/Layout";

const Topbar = () => {
  return (
    <div className={styles.container}>
      <SearchForm />
    </div>
  );
};

export default Topbar;
