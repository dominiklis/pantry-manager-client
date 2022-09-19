import React from "react";
import styles from "./Switch.module.css";

const Switch = ({ toTheRight }) => {
  const getMarkerStyles = () => {
    let res = styles.marker;

    if (toTheRight) res += ` ${styles.toTheRight}`;

    return res;
  };

  return (
    <div className={styles.container}>
      <div className={getMarkerStyles()} />
    </div>
  );
};

export default Switch;
