import { Button, Dropdown } from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./Select.module.css";

const Select = ({
  buttonStyles,
  options,
  selectedValue,
  onChange,
  hideOnClick,
  showButtonBorder,
  disableShiftingToTheRight,
}) => {
  const isDarkTheme = useIsDarkTheme();

  if (!options || !Array.isArray(options)) return null;

  return (
    <Dropdown
      disableShiftingToTheRight={disableShiftingToTheRight}
      hideOnClick={hideOnClick}
      dropdownButton={
        <Button
          type="button"
          additionalStyles={buttonStyles}
          backgroundColor={
            isDarkTheme ? componentColors.transparent : componentColors.white
          }
          size={componentSizes.small}
          icon={
            options.filter((option) => option.value === selectedValue)[0]?.icon
          }
          showBorder={showButtonBorder}
        >
          {options.filter((option) => option.value === selectedValue)[0]?.label}
        </Button>
      }
      dropdownContent={
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.listItem}
              data-dark-theme={isDarkTheme}
            >
              <Button
                type="button"
                icon={option.icon}
                backgroundColor={componentColors.transparent}
                size={componentSizes.small}
                onClick={() => onChange(option.value)}
              >
                {option.label}
              </Button>
            </li>
          ))}
        </ul>
      }
    />
  );
};

export default Select;
