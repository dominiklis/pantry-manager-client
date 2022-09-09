import { useLayoutEffect, useRef, useState } from "react";
import styles from "./Select.module.css";

const useSelect = ({ onChange, listStyles }) => {
  const [showList, setShowList] = useState(false);

  const handleHideList = () => setShowList(false);

  const toggleShowList = () => setShowList((prev) => !prev);

  const handleButtonClick = (value) => {
    onChange(value);
    handleHideList();
  };

  const [inLeftHalf, setInLeftHalf] = useState(true);

  const selectListRef = useRef(null);

  useLayoutEffect(() => {
    if (selectListRef.current) {
      setInLeftHalf(
        window.innerWidth / 2 <
          selectListRef.current.getBoundingClientRect().left
      );
    }
  }, []);

  const getBackdropStyles = () => {
    let res = styles.backdrop;

    if (showList) res += ` ${styles.showBackdrop}`;

    return res;
  };

  const getListStyles = () => {
    let res = styles.list;

    if (listStyles) res += ` ${listStyles}`;
    if (inLeftHalf) res += ` ${styles.listRight}`;

    return res;
  };

  return {
    toggleShowList,
    getBackdropStyles,
    handleHideList,
    selectListRef,
    showList,
    getListStyles,
    handleButtonClick,
  };
};

export default useSelect;
