import { useIsDarkTheme } from "hooks";
import { useRef, useState } from "react";
import styles from "./Dropdown.module.css";

const useDropdown = ({
  className,
  visibleBackdrop,
  disableShiftingToTheRight,
  forceShiftingToTheRight,
  disabledButton,
}) => {
  const darkTheme = useIsDarkTheme();

  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  const [showContent, setShowContent] = useState(false);
  const [inLeftHalf, setInLeftHalf] = useState(true);

  const toggleShowContent = () => setShowContent((prev) => !prev);
  const handleHideContent = () => setShowContent(false);

  const handleButton = () => {
    if (disabledButton) return;

    if (buttonRef.current) {
      setInLeftHalf(
        window.innerWidth / 2 > buttonRef.current.getBoundingClientRect().left
      );
    }

    toggleShowContent();
  };

  const getContainerStyles = () => {
    let res = styles.container;

    if (className) res += ` ${className}`;

    return res;
  };

  const getBackdropStyles = () => {
    let res = styles.backdrop;

    if (showContent) res += ` ${styles.showBackdrop}`;
    if (visibleBackdrop) res += ` ${styles.visibleBackdrop}`;

    return res;
  };

  const getContentStyles = () => {
    let res = styles.content;

    if ((!inLeftHalf || forceShiftingToTheRight) && !disableShiftingToTheRight)
      res += ` ${styles.contentRight}`;

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
    getContainerStyles,
    getContentStyles,
  };
};

export default useDropdown;
