import { useIsDarkTheme, useIsSmallScreen } from "hooks";
import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./ControlledAccordion.module.css";
import accordionStyles from "./accordionStyles.module.css";

const ControlledAccordion = ({
  showContent,
  onHeaderClick,
  children,
  id,
  actionsBeforeHeader,
  header,
  hideHeaderActionsOnClosed,
  smallScreenHeaderActions,
  open,
}) => {
  const darkTheme = useIsDarkTheme();
  const smallScreen = useIsSmallScreen();

  const toggleShowContent = () => onHeaderClick();
  const openAccordion = () => onHeaderClick(true);

  useEffect(() => {
    if (open) openAccordion();
  }, [open]);

  const getContainerStyles = () => {
    let res = styles.container;

    if (open) res += ` ${styles.openedAccordion}`;

    return res;
  };

  const contentRef = useRef(null);

  return (
    <div className={getContainerStyles()} data-dark-theme={darkTheme} id={id}>
      <div className={styles.headerWrapper}>
        {actionsBeforeHeader}

        <button onClick={toggleShowContent} className={styles.header}>
          {header}
        </button>

        {(hideHeaderActionsOnClosed && showContent && smallScreen) ||
        (!hideHeaderActionsOnClosed && smallScreen) ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {smallScreenHeaderActions}
          </div>
        ) : null}
      </div>

      <CSSTransition
        nodeRef={contentRef}
        in={showContent}
        timeout={200}
        classNames={accordionStyles}
        unmountOnExit
      >
        <div ref={contentRef}>{children}</div>
      </CSSTransition>
    </div>
  );
};

export default ControlledAccordion;
