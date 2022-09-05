import LoadingButton from "./LoadingButton";
import { componentColors, componentSizes } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  className,
  additionalStyles,
  disabled,
  type,
  backgroundColor,
  loading,
  icon,
  onClick,
  size,
  iconButton,
}) => {
  const darkTheme = useIsDarkTheme();

  const getStyles = () => {
    let res = styles.button;
    if (loading) res += ` ${styles.loading}`;

    if (className) res += ` ${className}`;

    if (additionalStyles) res += ` ${additionalStyles}`;

    switch (backgroundColor) {
      case componentColors.primary:
        res += ` ${styles.primary}`;
        break;
      case componentColors.secondary:
        res += ` ${styles.secondary}`;
        break;
      case componentColors.transparent:
        res += ` ${styles.transparent}`;
        break;
      default:
        break;
    }

    switch (size) {
      case componentSizes.small:
        res += ` ${styles.small}`;
        break;
      case componentSizes.large:
        res += ` ${styles.large}`;
        break;

      default:
        break;
    }

    if (iconButton) res += ` ${styles.iconButton}`;

    return res;
  };

  return (
    <button
      data-dark-theme={darkTheme}
      className={getStyles()}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {loading ? (
        <LoadingButton />
      ) : (
        <div className={styles.content}>
          {icon ? <span className={styles.icon}>{icon}</span> : null}
          {!iconButton && <span className={styles.text}>{children}</span>}
        </div>
      )}
    </button>
  );
};

export default Button;
