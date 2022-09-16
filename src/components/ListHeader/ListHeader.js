import React from "react";
import styles from "./ListHeader.module.css";

const ListHeader = ({ className, children }) => {
  const getStyles = () => {
    let res = styles.header;

    if (className) res += ` ${className}`;

    return res;
  };

  return <div className={getStyles()}>{children}</div>;
};

export default ListHeader;
