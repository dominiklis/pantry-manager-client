import { componentSizes, storageColors } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import { IoAlbums, IoAlbumsOutline } from "react-icons/io5";
import styles from "./StorageIndicator.module.css";

const StorageIndicator = ({
  className,
  color,
  size,
  hover,
  active,
  icon,
  transparentBorder,
}) => {
  const darkTheme = useIsDarkTheme();

  const getStyles = () => {
    let res = styles.indicator;

    switch (color) {
      case storageColors.white:
        res += ` ${styles.indicatorWhite}`;
        break;

      case storageColors.red:
        res += ` ${styles.indicatorRed}`;
        break;

      case storageColors.pink:
        res += ` ${styles.indicatorPink}`;
        break;

      case storageColors.purple:
        res += ` ${styles.indicatorPurple}`;
        break;

      case storageColors.deepPurple:
        res += ` ${styles.indicatorDeepPurple}`;
        break;

      case storageColors.indigo:
        res += ` ${styles.indicatorIndigo}`;
        break;

      case storageColors.blue:
        res += ` ${styles.indicatorBlue}`;
        break;

      case storageColors.lightBlue:
        res += ` ${styles.indicatorLightBlue}`;
        break;

      case storageColors.cyan:
        res += ` ${styles.indicatorCyan}`;
        break;

      case storageColors.teal:
        res += ` ${styles.indicatorTeal}`;
        break;

      case storageColors.green:
        res += ` ${styles.indicatorGreen}`;
        break;

      case storageColors.lightGreen:
        res += ` ${styles.indicatorLightGreen}`;
        break;

      case storageColors.lime:
        res += ` ${styles.indicatorLime}`;
        break;

      case storageColors.yellow:
        res += ` ${styles.indicatorYellow}`;
        break;

      case storageColors.amber:
        res += ` ${styles.indicatorAmber}`;
        break;

      case storageColors.orange:
        res += ` ${styles.indicatorOrange}`;
        break;

      case storageColors.deepOrange:
        res += ` ${styles.indicatorDeepOrange}`;
        break;

      default:
        break;
    }

    switch (size) {
      default:
        break;

      case componentSizes.large:
        res += ` ${styles.large}`;
        break;

      case componentSizes.veryLarge:
        res += ` ${styles.veryLarge}`;
        break;
    }

    if (hover) res += ` ${styles.hover}`;
    if (active) res += ` ${styles.active}`;
    if (transparentBorder) res += ` ${styles.transparentBorder}`;

    if (className) res += ` ${className}`;

    return res;
  };

  if (icon) {
    let icon = <IoAlbums />;
    if (!darkTheme && color === storageColors.white) icon = <IoAlbumsOutline />;

    return (
      <div
        className={`${getStyles()} ${styles.icon}`}
        data-dark-theme={darkTheme}
      >
        {icon}
      </div>
    );
  }

  return <div className={getStyles()} data-dark-theme={darkTheme} />;
};

export default StorageIndicator;
