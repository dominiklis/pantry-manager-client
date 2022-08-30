import Errors from "./Errors";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, name, type, value, handleChange, disabled, error }) => {
  const darkTheme = useIsDarkTheme();

  const getStyles = () => {
    let res = styles.container;

    if (disabled) res += ` ${styles.disabled}`;
    if (error) res += ` ${styles.error}`;

    return res;
  };

  return (
    <div className={getStyles()} data-dark-theme={darkTheme}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <Errors error={error} />
    </div>
  );
};

export default Input;
