import { ControlledAccordion } from "components";
import { useIsDarkTheme } from "hooks";
import { useWarningContainer } from "pages/Home";
import React from "react";
import { IoChevronDown } from "react-icons/io5";
import styles from "./Warnings.module.css";

const WarningContainer = ({
  children,
  header,
  headerType,
  showContent,
  dispatchAction,
}) => {
  const darkTheme = useIsDarkTheme();

  const { iconStyles, headerStyles, handleHeaderClick } = useWarningContainer({
    styles,
    showContent,
    headerType,
    dispatchAction,
  });

  return (
    <div className={styles.container} data-dark-theme={darkTheme}>
      <ControlledAccordion
        showContent={showContent}
        onHeaderClick={handleHeaderClick}
        initiallyOpen
        header={
          <div className={headerStyles} data-dark-theme={darkTheme}>
            <span>{header}</span>
            <span className={iconStyles}>
              <IoChevronDown />
            </span>
          </div>
        }
      >
        {children}
      </ControlledAccordion>
    </div>
  );
};

export default WarningContainer;
