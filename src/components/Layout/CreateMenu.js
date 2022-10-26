import { Actions, CreateProduct, Translate } from "components";
import {
  CreateLabel,
  CreateShoppingList,
  CreateStorage,
  CreateShoppingListItem,
  Menu,
  useCreateMenu,
} from "components/Layout";
import { screenSizesModes } from "constantStrings";
import React from "react";
import { IoAdd } from "react-icons/io5";
import { ActionWtihButton } from "utils";

const componentName = "CreateMenu";

const CreateMenu = ({ toggleMenu, screenSize }) => {
  const { initialAction, storageId, labelId, shoppingListId } = useCreateMenu();

  return (
    <Menu
      toggleMenu={toggleMenu}
      header={<Translate section={componentName} text="header" />}
    >
      <Actions
        buttonsJustifiedToTheLeft={screenSize === screenSizesModes.wide}
        initialValue={initialAction}
        actions={[
          new ActionWtihButton(
            <Translate section={componentName} text="createProductHeader" />,
            (
              <CreateProduct
                selectedStorage={storageId}
                selectedLabel={labelId}
                disableShiftingDropdownToTheRight={
                  screenSize === screenSizesModes.wide
                }
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
            <Translate section={componentName} text="createLabelButtonText" />,
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
            (
              <CreateShoppingListItem
                selectedList={shoppingListId}
                disableShiftingDropdownToTheRight
              />
            ),
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
    </Menu>
  );
};

export default CreateMenu;
