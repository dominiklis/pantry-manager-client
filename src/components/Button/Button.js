import LoadingButton from "./LoadingButton";
import { componentColors } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  disabled,
  type,
  backgroundColor,
  loading,
  icon,
}) => {
  const darkTheme = useIsDarkTheme();

  const getStyles = () => {
    let res = styles.button;
    if (loading) res += ` ${styles.loading}`;

    switch (backgroundColor) {
      case componentColors.primary:
        res += ` ${styles.primary}`;
        break;
      case componentColors.secondary:
        res += ` ${styles.secondary}`;
        break;
      default:
        break;
    }

    return res;
  };

  return (
    <button
      data-dark-theme={darkTheme}
      className={getStyles()}
      disabled={disabled}
      type={type}
    >
      {loading ? (
        <LoadingButton />
      ) : (
        <div className={styles.content}>
          {icon ? <span className={styles.icon}>{icon}</span> : null}
          <span className={styles.text}>{children}</span>
        </div>
      )}
    </button>
  );
};

export default Button;
