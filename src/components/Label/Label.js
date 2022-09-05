import React from "react";
import styles from "./Label.module.css";

const Label = ({ children, sublabel }) => {
  const getLabelStyles = () => {
    let res = styles.label;

    if (sublabel) res += ` ${styles.sublabel}`;

    return res;
  };

  return <label className={getLabelStyles()}>{children}</label>;
};

export default Label;
