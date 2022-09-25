import { Button, Translate } from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useIsDarkTheme, useIsSmallScreen } from "hooks";
import React from "react";
import { IoAdd, IoPencil, IoShareSocial, IoTrash } from "react-icons/io5";
import styles from "./ShoppingListActionButtons.module.css";

const componentName = "ShoppingListActionButtons";

const ShoppingListActionButtons = ({ setSelectedAction }) => {
  const darkTheme = useIsDarkTheme();

  const isSmallScreen = useIsSmallScreen();

  const getListStyles = () => {
    if (isSmallScreen) return styles.list;

    return styles.actionButtons;
  };

  return (
    <ul className={getListStyles()}>
      <li className={styles.listItem} data-dark-theme={darkTheme}>
        <Button
          type="button"
          icon={<IoAdd />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(0)}
        >
          <Translate section={componentName} text="addItemButtonText" />
        </Button>
      </li>
      <li className={styles.listItem} data-dark-theme={darkTheme}>
        <Button
          type="button"
          icon={<IoPencil />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(1)}
        >
          <Translate section={componentName} text="editButtonText" />
        </Button>
      </li>
      <li className={styles.listItem} data-dark-theme={darkTheme}>
        <Button
          type="button"
          icon={<IoTrash />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(2)}
        >
          <Translate section={componentName} text="deleteButtonText" />
        </Button>
      </li>
      <li className={styles.listItem} data-dark-theme={darkTheme}>
        <Button
          type="button"
          icon={<IoShareSocial />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(3)}
        >
          <Translate section={componentName} text="shareButtonText" />
        </Button>
      </li>
    </ul>
  );
};

export default ShoppingListActionButtons;
