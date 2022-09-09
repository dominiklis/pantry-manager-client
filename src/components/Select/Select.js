import { Button } from "components";
import { useSelect } from "components/Select";
import { componentColors, componentSizes } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Select.module.css";
import listAnimationStyles from "./SelectList.module.css";

const Select = ({
  buttonStyles,
  listStyles,
  options,
  selectedValue,
  onChange,
}) => {
  const darkTheme = useIsDarkTheme();

  const {
    toggleShowList,
    getBackdropStyles,
    handleHideList,
    selectListRef,
    showList,
    getListStyles,
    handleButtonClick,
  } = useSelect({ onChange, listStyles });

  if (!options || !Array.isArray(options)) return null;

  return (
    <div className={styles.container}>
      <Button
        type="button"
        className={styles.selectedButton}
        additionalStyles={buttonStyles}
        backgroundColor={componentColors.transparent}
        size={componentSizes.small}
        icon={
          options.filter((option) => option.value === selectedValue)[0]?.icon
        }
        onClick={toggleShowList}
      >
        {options.filter((option) => option.value === selectedValue)[0]?.label}
      </Button>

      <div className={getBackdropStyles()} onClick={handleHideList} />

      <CSSTransition
        nodeRef={selectListRef}
        in={showList}
        timeout={200}
        classNames={listAnimationStyles}
        unmountOnExit
      >
        <ul
          className={getListStyles()}
          data-dark-theme={darkTheme}
          ref={selectListRef}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.listItem}
              data-dark-theme={darkTheme}
            >
              <Button
                type="button"
                icon={option.icon}
                backgroundColor={componentColors.transparent}
                size={componentSizes.small}
                onClick={() => handleButtonClick(option.value)}
              >
                {option.label}
              </Button>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Select;
