import React from "react";
import styles from "./ToggleIcons.module.css";

const ToggleIcons = ({ leftIcon, rightIcon, toTheRight }) => {
  const getLeftIconStyles = () => {
    let res = styles.left;

    if (!toTheRight) res += ` ${styles.toTheLeft}`;
    if (toTheRight) res += ` ${styles.toTheRight}`;

    return res;
  };

  const getRightIconStyles = () => {
    let res = styles.right;

    if (!toTheRight) res += ` ${styles.toTheLeft}`;
    if (toTheRight) res += ` ${styles.toTheRight}`;

    return res;
  };

  return (
    <div className={styles.container}>
      <span className={getLeftIconStyles()}>{leftIcon}</span>
      <span className={getRightIconStyles()}>{rightIcon}</span>
    </div>
  );
};

export default ToggleIcons;
