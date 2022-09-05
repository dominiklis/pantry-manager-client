import { useState } from "react";
import accordionStyles from "styles/accordion.module.css";

const useAccordion = (options = {}) => {
  const { initiallyOpen = true, additionalStylesToOpenedContainer } = options;

  const [showContent, setShowContent] = useState(initiallyOpen);

  const toggleShowContent = () => setShowContent((prev) => !prev);

  const closeAccordion = () => setShowContent(false);

  const openAccordion = () => setShowContent(true);

  const getContentStyles = () => {
    let res = accordionStyles.content;

    if (showContent) {
      res += ` ${accordionStyles.show}`;

      if (additionalStylesToOpenedContainer)
        res += ` ${additionalStylesToOpenedContainer}`;
    }

    return res;
  };

  return {
    showContent,
    toggleShowContent,
    getContentStyles,
    openAccordion,
    closeAccordion,
  };
};

export default useAccordion;
