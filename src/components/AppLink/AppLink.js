import React from "react";
import styles from "styles/links.module.css";
import { Link } from "react-router-dom";
import { useIsDarkTheme } from "hooks";

const AppLink = ({ children, className, to, color }) => {
  const darkTheme = useIsDarkTheme();

  const getStyle = () => {
    let res = styles.link;

    if (className) res += ` ${className}`;

    switch (color) {
      case "white":
        res += ` ${styles.white}`;
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
