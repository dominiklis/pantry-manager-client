import { Actions, Button, CreateShoppingListItem, Translate } from "components";
import {
  CreateLabel,
  CreateProduct,
  CreateShoppingList,
  CreateStorage,
} from "components/Layout";
import { componentColors, componentSizes } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import { IoAdd, IoChevronDown } from "react-icons/io5";
import { Action } from "utils";
import styles from "./CreateOverlay.module.css";

const componentName = "CreateOverlay";

const CreateOverlay = React.forwardRef(({ onHideButtonClick }, ref) => {
  const darkTheme = useIsDarkTheme();

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.backdrop} onClick={onHideButtonClick} />

      <Button
        iconButton
        icon={<IoChevronDown />}
        size={componentSizes.large}
        backgroundColor={componentColors.secondary}
        onClick={onHideButtonClick}
        className={styles.closeButton}
      />

      <div className={styles.content} data-dark-theme={darkTheme}>
        <Translate section={componentName} text="header" />

        <Actions
          initialValue={0}
          actions={[
            new Action(
              <Translate section={componentName} text="createProductHeader" />,
              <CreateProduct />,
              (
                <Translate
                  section={componentName}
                  text="createProductButtonText"
                />
              ),
              <IoAdd />
            ),
            new Action(
              <Translate section={componentName} text="createStorageHeader" />,
              <CreateStorage />,
              (
                <Translate
                  section={componentName}
                  text="createStorageButtonText"
                />
              ),
              <IoAdd />
            ),
            new Action(
              <Translate section={componentName} text="createLabelHeader" />,
              <CreateLabel />,
              (
                <Translate
                  section={componentName}
                  text="createLabelButtonText"
                />
              ),
              <IoAdd />
            ),
            new Action(
              (
                <Translate
                  section={componentName}
                  text="createShoppingListHeader"
                />
              ),
              <CreateShoppingList />,
              (
                <Translate
                  section={componentName}
                  text="createShoppingListButtonText"
                />
              ),
              <IoAdd />
            ),
            new Action(
              (
                <Translate
                  section={componentName}
                  text="createShoppingListItemHeader"
                />
              ),
              <CreateShoppingListItem />,
              (
                <Translate
                  section={componentName}
                  text="createShoppingListItemButtonText"
                />
              ),
              <IoAdd />
            ),
          ]}
        />
      </div>
    </div>
  );
});

export default CreateOverlay;
