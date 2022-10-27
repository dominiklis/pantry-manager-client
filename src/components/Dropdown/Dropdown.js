import { useDropdown } from "components/Dropdown";
import React from "react";
import { CSSTransition } from "react-transition-group";
import contentStyles from "./content.module.css";

const Dropdown = ({
  stopPropagation,
  visibleBackdrop,
  className,
  dropdownButton,
  dropdownContent,
  hideOnClick,
  disableShiftingToTheRight,
  forceShiftingToTheRight,
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
  } = useDropdown({
    className,
    visibleBackdrop,
    disableShiftingToTheRight,
    forceShiftingToTheRight,
  });

  return (
    <div
      className={getContainerStyles()}
      onClick={stopPropagation ? (e) => e.stopPropagation() : null}
    >
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
