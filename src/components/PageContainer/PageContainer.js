import { Navigation } from "components/PageContainer";
import React from "react";
import styles from "./PageContainer.module.css";

const PageContainer = ({ children }) => {
  return (
    <main className={styles.container}>
      <Navigation />
      {children}
    </main>
  );
};

export default PageContainer;
