import { Button } from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import { IoChevronDown, IoClose } from "react-icons/io5";
import styles from "./Menu.module.css";

const Menu = ({ children, toggleMenu, header, closeButton }) => {
  const isDarkTheme = useIsDarkTheme();

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleEscapeButton = (e) => {
    if (e.key === "Escape") {
      toggleMenu();
    }
  };

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      data-dark-theme={isDarkTheme}
      onKeyDown={handleEscapeButton}
    >
      <Button
        iconButton
        icon={<IoChevronDown />}
        size={componentSizes.large}
        backgroundColor={componentColors.secondary}
        onClick={toggleMenu}
        className={styles.closeButton}
      />

      <h1 className={styles.header}>
        {header}
        {closeButton ? (
          <Button
            iconButton
            icon={<IoClose />}
            backgroundColor={componentColors.transparent}
            onClick={toggleMenu}
          />
        ) : null}
      </h1>

      {children}
    </div>
  );
};

export default Menu;
