import { Accordion, Dropdown, DropdownMenuButton, Translate } from "components";
import { various } from "constantStrings";
import {
  ShoppingListItemsList,
  ShoppingListActionButtons,
  ShoppingListActions,
  useShoppingList,
} from "pages/ShoppingLists";
import React from "react";
import styles from "./ShoppingList.module.css";

const componentName = "ShoppingList";

const ShoppingList = ({
  shoppingListId,
  shoppingListName,
  ownerId,
  users,
  canShare,
}) => {
  const {
    darkTheme,
    listItems,
    selectedAction,
    setSelectedAction,
    handleCloseAction,
    userId,
  } = useShoppingList({ shoppingListId });

  return (
    <div className={styles.container} id={shoppingListId}>
      <Accordion
        key={shoppingListId}
        header={
          <div className={styles.header} data-dark-theme={darkTheme}>
            {shoppingListName ?? (
              <Translate section={componentName} text="withoutShoppingList" />
            )}
          </div>
        }
        initiallyOpen
        hideHeaderActionsOnClosed
        smallScreenHeaderActions={
          shoppingListId !== various.noShoppingList ? (
            <Dropdown
              hideOnClick
              dropdownButton={<DropdownMenuButton />}
              dropdownContent={
                <ShoppingListActionButtons
                  shoppingListId={shoppingListId}
                  selectedAction={selectedAction}
                  setSelectedAction={setSelectedAction}
                  ownerId={ownerId}
                />
              }
            />
          ) : null
        }
      >
        <div className={styles.content}>
          <ShoppingListActions
            actionButtons={
              <ShoppingListActionButtons
                shoppingListId={shoppingListId}
                selectedAction={selectedAction}
                setSelectedAction={setSelectedAction}
                ownerId={ownerId}
                canShare={canShare}
              />
            }
            shoppingListId={shoppingListId}
            shoppingListName={shoppingListName}
            ownerId={ownerId}
            users={users}
            listItems={listItems}
            selectedAction={selectedAction}
            onCloseAction={handleCloseAction}
          />

          {ownerId !== userId && shoppingListId !== various.noShoppingList ? (
            <p className={styles.sharedListInfo}>
              <Translate section={componentName} text="listIsShared" />
            </p>
          ) : null}

          <ShoppingListItemsList items={listItems} />
        </div>
      </Accordion>
    </div>
  );
};

export default ShoppingList;
