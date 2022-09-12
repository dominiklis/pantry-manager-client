import { useIsDarkTheme } from "hooks";
import { useRef, useState } from "react";
import styles from "./Dropdown.module.css";

const useDropdown = () => {
  const darkTheme = useIsDarkTheme();

  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  const [showContent, setShowContent] = useState(false);
  const [inLeftHalf, setInLeftHalf] = useState(true);

  const toggleShowContent = () => setShowContent((prev) => !prev);
  const handleHideContent = () => setShowContent(false);

  const handleButton = () => {
    if (buttonRef.current) {
      setInLeftHalf(
        window.innerWidth / 2 > buttonRef.current.getBoundingClientRect().left
      );
    }

    toggleShowContent();
  };

  const getBackdropStyles = () => {
    let res = styles.backdrop;

    if (showContent) res += ` ${styles.showBackdrop}`;

    return res;
  };

  const getContentStyles = () => {
    let res = styles.content;

    if (!inLeftHalf) res += ` ${styles.contentRight}`;

    return res;
  };

  return {
    darkTheme,
    buttonRef,
    contentRef,
    showContent,
    handleButton,
    getBackdropStyles,
    handleHideContent,
    getContentStyles,
  };
};

export default useDropdown;
