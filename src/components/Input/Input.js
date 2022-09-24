import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./Input.module.css";
import { Label } from "components";
import { Errors } from "components/Input";

const Input = ({
  className,
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

  const getContainerStyles = () => {
    let res = styles.container;

    if (className) res += ` ${className}`;
    if (disabled) res += ` ${styles.disabled}`;
    if (error) res += ` ${styles.error}`;

    return res;
  };

  return (
    <div className={getContainerStyles()} data-dark-theme={darkTheme}>
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
