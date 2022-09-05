import { useAccordion, useIsDarkTheme } from "hooks";
import { useWarningContainer } from "pages/Home";
import React from "react";
import { IoChevronDown } from "react-icons/io5";
import styles from "./Warnings.module.css";

const WarningContainer = ({ children, header, headerType }) => {
  const darkTheme = useIsDarkTheme();
  const { showContent, toggleShowContent, getContentStyles } = useAccordion();

  const { iconStyles, headerStyles } = useWarningContainer({
    styles,
    showContent,
    headerType,
  });

  return (
    <div className={styles.container} data-dark-theme={darkTheme}>
      <div
        className={headerStyles}
        onClick={toggleShowContent}
        data-dark-theme={darkTheme}
      >
        <span>{header}</span>
        <span className={iconStyles}>
          <IoChevronDown />
        </span>
      </div>
      <div className={getContentStyles()}>{children}</div>
    </div>
  );
};

export default WarningContainer;
