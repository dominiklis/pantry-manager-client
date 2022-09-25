import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import accordionStyles from "./accordionStyles.module.css";
import styles from "./Accordion.module.css";
import { useIsDarkTheme, useIsSmallScreen } from "hooks";

const Accordion = ({
  children,
  id,
  header,
  hideHeaderActionsOnClosed,
  smallScreenHeaderActions,
  initiallyOpen,
  open,
}) => {
  const darkTheme = useIsDarkTheme();
  const smallScreen = useIsSmallScreen();

  const [showContent, setShowContent] = useState(initiallyOpen ?? false);

  const toggleShowContent = () => setShowContent((prev) => !prev);
  const openAccordion = () => setShowContent(true);

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
      <div onClick={toggleShowContent} className={styles.header}>
        {header}
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

export default Accordion;
