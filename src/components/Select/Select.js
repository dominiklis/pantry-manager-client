import { Button } from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useAccordion, useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./Select.module.css";

const Select = ({
  buttonStyles,
  options,
  selectedValue,
  onChange,
  listStyles,
}) => {
  const darkTheme = useIsDarkTheme();
  const { showContent, toggleShowContent, getContentStyles, closeAccordion } =
    useAccordion({ initiallyOpen: false });

  const handleButtonClick = (value) => {
    onChange(value);
    closeAccordion();
  };

  const getBackdropStyles = () => {
    let res = styles.backdrop;

    if (showContent) res += ` ${styles.showBackdrop}`;

    return res;
  };

  const getListStyles = () => {
    let res = `${styles.list} ${getContentStyles()}`;

    if (listStyles) res += ` ${listStyles}`;

    return res;
  };

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
        onClick={toggleShowContent}
      >
        {options.filter((option) => option.value === selectedValue)[0]?.label}
      </Button>

      <div className={getBackdropStyles()} onClick={closeAccordion} />

      <ul className={getListStyles()}>
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
    </div>
  );
};

export default Select;
