import {
  Actions,
  Button,
  CreateProduct,
  CreateShoppingListItem,
  Translate,
} from "components";
import {
  CreateLabel,
  CreateShoppingList,
  CreateStorage,
  useCreateOverlay,
} from "components/Layout";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoAdd, IoChevronDown } from "react-icons/io5";
import { ActionWtihButton } from "utils";
import styles from "./CreateOverlay.module.css";

const componentName = "CreateOverlay";

const CreateOverlay = React.forwardRef(({ onHideButtonClick }, ref) => {
  const { darkTheme, initialAction, storageId, labelId, shoppingListId } =
    useCreateOverlay();

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
          initialValue={initialAction}
          actions={[
            new ActionWtihButton(
              <Translate section={componentName} text="createProductHeader" />,
              (
                <CreateProduct
                  selectedStorage={storageId}
                  selectedLabel={labelId}
                />
              ),
              (
                <Translate
                  section={componentName}
                  text="createProductButtonText"
                />
              ),
              <IoAdd />
            ),
            new ActionWtihButton(
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
            new ActionWtihButton(
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
            new ActionWtihButton(
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
            new ActionWtihButton(
              (
                <Translate
                  section={componentName}
                  text="createShoppingListItemHeader"
                />
              ),
              <CreateShoppingListItem selectedList={shoppingListId} />,
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
