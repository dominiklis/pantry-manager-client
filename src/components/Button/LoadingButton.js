import React from "react";
import styles from "./LoadingButton.module.css";

const LoadingButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingDot} />
      <div className={styles.loadingDot} />
      <div className={styles.loadingDot} />
    </div>
  );
};

export default LoadingButton;
