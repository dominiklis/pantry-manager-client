import { Navigation } from "components/PageContainer";
import React from "react";
import styles from "./PageContainer.module.css";

const PageContainer = ({ children, hideNavigation }) => {
  return (
    <main className={styles.container}>
      {hideNavigation ? null : <Navigation />}
      {children}
    </main>
  );
};

export default PageContainer;
