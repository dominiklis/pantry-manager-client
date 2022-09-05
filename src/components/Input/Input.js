import Errors from "./Errors";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./Input.module.css";
import { Label } from "components";

const Input = ({
  label,
  name,
  type,
  value,
  onChange,
  disabled,
  error,
  autoFocus,
}) => {
  const darkTheme = useIsDarkTheme();

  const getStyles = () => {
    let res = styles.container;

    if (disabled) res += ` ${styles.disabled}`;
    if (error) res += ` ${styles.error}`;

    return res;
  };

  return (
    <div className={getStyles()} data-dark-theme={darkTheme}>
      <Label>{label}</Label>
      <input
        className={styles.input}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoFocus={autoFocus}
      />
      <Errors error={error} />
    </div>
  );
};

export default Input;
