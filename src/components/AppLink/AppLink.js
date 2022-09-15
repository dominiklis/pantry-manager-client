import React from "react";
import styles from "styles/links.module.css";
import { Link } from "react-router-dom";
import { useIsDarkTheme } from "hooks";
import { componentColors } from "constantStrings";

const AppLink = ({ children, className, to, color }) => {
  const darkTheme = useIsDarkTheme();

  const getStyle = () => {
    let res = styles.link;

    if (className) res += ` ${className}`;

    switch (color) {
      case componentColors.primary:
        res += ` ${styles.primary}`;
        break;

      default:
        break;
    }

    return res;
  };
  return (
    <Link to={to ?? "/"} className={getStyle()} data-dark-theme={darkTheme}>
      {children}
    </Link>
  );
};

export default AppLink;
