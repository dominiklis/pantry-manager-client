import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import accordionStyles from "./accordionStyles.module.css";
import styles from "./Accordion.module.css";
import { useIsDarkTheme } from "hooks";

const Accordion = ({ children, header, initiallyOpen, open }) => {
  const darkTheme = useIsDarkTheme();

  const [showContent, setShowContent] = useState(initiallyOpen ?? false);

  const toggleShowContent = () => setShowContent((prev) => !prev);
  const openAccordion = () => setShowContent(true);

  useEffect(() => {
    if (open) openAccordion();
  }, [open]);

  const getContainerStyles = () => {
    let res = "";

    if (open || initiallyOpen) res += styles.openedAccordion;

    return res;
  };

  const contentRef = useRef(null);

  return (
    <div className={getContainerStyles()} data-dark-theme={darkTheme}>
      <span onClick={toggleShowContent}>{header}</span>

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
