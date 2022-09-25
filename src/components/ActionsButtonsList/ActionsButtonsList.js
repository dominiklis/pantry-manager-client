import { useIsDarkTheme, useIsSmallScreen } from "hooks";
import React from "react";
import styles from "./ActionsButtonsList.module.css";

const ActionsButtonsList = ({ buttons = [] }) => {
  const darkTheme = useIsDarkTheme();

  const isSmallScreen = useIsSmallScreen();

  const getListStyles = () => {
    if (isSmallScreen) return styles.list;

    return styles.actionButtons;
  };

  return (
    <ul className={getListStyles()}>
      {buttons.map((button, index) => (
        <li className={styles.listItem} data-dark-theme={darkTheme} key={index}>
          {button}
        </li>
      ))}
    </ul>
  );
};

export default ActionsButtonsList;
