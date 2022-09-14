import { useDropdown } from "components/Dropdown";
import React from "react";
import { CSSTransition } from "react-transition-group";
import contentStyles from "./content.module.css";

const Dropdown = ({
  className,
  dropdownButton,
  dropdownContent,
  hideOnClick,
}) => {
  const {
    darkTheme,
    buttonRef,
    contentRef,
    showContent,
    handleButton,
    handleHideContent,
    getContainerStyles,
    getBackdropStyles,
    getContentStyles,
  } = useDropdown({ className });

  return (
    <div className={getContainerStyles()}>
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
          onClick={hideOnClick ? handleHideContent : null}
        >
          {dropdownContent}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
