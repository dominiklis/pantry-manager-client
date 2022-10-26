import { LoadingButton } from "components/Button";
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
  colorOnHover,
  loading,
  icon,
  onClick,
  size,
  iconButton,
  showBorder,
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
      case componentColors.white:
        res += ` ${styles.white}`;
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
    if (showBorder) res += ` ${styles.border}`;

    return res;
  };

  const getIconStyles = () => {
    let res = styles.icon;

    switch (colorOnHover) {
      default:
        break;

      case componentColors.error:
        res += ` ${styles.errorColorHover}`;
        break;
    }

    return res;
  };

  const getTextStyles = () => {
    let res = styles.text;

    switch (colorOnHover) {
      default:
        break;

      case componentColors.error:
        res += ` ${styles.errorColorHover}`;
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
      onClick={onClick}
    >
      {loading ? (
        <LoadingButton />
      ) : (
        <div className={styles.content}>
          {icon ? <span className={getIconStyles()}>{icon}</span> : null}
          {!iconButton && <span className={getTextStyles()}>{children}</span>}
        </div>
      )}
    </button>
  );
};

export default Button;
