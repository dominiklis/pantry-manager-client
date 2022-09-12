import { Button, Dropdown } from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./Select.module.css";

const Select = ({ buttonStyles, options, selectedValue, onChange }) => {
  const darkTheme = useIsDarkTheme();

  if (!options || !Array.isArray(options)) return null;

  return (
    <Dropdown
      dropdownButton={
        <Button
          type="button"
          additionalStyles={buttonStyles}
          backgroundColor={componentColors.transparent}
          size={componentSizes.small}
          icon={
            options.filter((option) => option.value === selectedValue)[0]?.icon
          }
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
              data-dark-theme={darkTheme}
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
