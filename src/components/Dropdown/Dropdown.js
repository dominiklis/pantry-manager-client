import { useDropdown } from "components/Dropdown";
import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Dropdown.module.css";
import contentStyles from "./content.module.css";

const Dropdown = ({ dropdownButton, dropdownContent }) => {
  const {
    darkTheme,
    buttonRef,
    contentRef,
    showContent,
    handleButton,
    getBackdropStyles,
    handleHideContent,
    getContentStyles,
  } = useDropdown();

  return (
    <div className={styles.container}>
      <span onClick={handleButton} ref={buttonRef}>
        {dropdownButton}
      </span>

      <div className={getBackdropStyles()} onClick={handleHideContent} />

      <CSSTransition
        nodeRef={contentRef}
        in={showContent}
        timeout={200}
        classNames={contentStyles}
        unmountOnExit
      >
        <div
          className={getContentStyles()}
          data-dark-theme={darkTheme}
          ref={contentRef}
        >
          {dropdownContent}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
