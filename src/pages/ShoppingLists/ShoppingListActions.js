import { ControlledActions, Share, Translate } from "components";
import { various } from "constantStrings";
import { useIsSmallScreen } from "hooks";
import {
  AddItem,
  DeleteShoppingList,
  EditShoppingList,
} from "pages/ShoppingLists";
import React from "react";
import { Action, sortByName } from "utils";
import styles from "./ShoppingListActions.module.css";

const componentName = "ShoppingListActions";

const ShoppingListActions = ({
  actionButtons,
  shoppingListId,
  shoppingListName,
  ownerId,
  users,
  listItems,
  selectedAction,
  onCloseAction,
}) => {
  const smallScreen = useIsSmallScreen();

  return (
    <div className={styles.container}>
      {!smallScreen ? actionButtons : null}
      {shoppingListId === various.noShoppingList ? null : (
        <ControlledActions
          selectedAction={selectedAction}
          onCloseAction={onCloseAction}
          actions={[
            new Action(
              <Translate section={componentName} text="addItemActionHeader" />,
              <AddItem shoppingListId={shoppingListId} />
            ),
            new Action(
              <Translate section={componentName} text="editActionHeader" />,
              (
                <EditShoppingList
                  shoppingListId={shoppingListId}
                  shoppingListName={shoppingListName}
                />
              )
            ),
            new Action(
              <Translate section={componentName} text="deleteActionHeader" />,
              (
                <DeleteShoppingList
                  shoppingListId={shoppingListId}
                  noItems={!listItems || !listItems.length}
                />
              )
            ),
            new Action(
              <Translate section={componentName} text="shareActionHeader" />,
              (
                <Share
                  isShoppingList
                  id={shoppingListId}
                  ownerId={ownerId}
                  users={users ? sortByName([...users], "userName") : null}
                />
              )
            ),
          ]}
        />
      )}
    </div>
  );
};

export default ShoppingListActions;
