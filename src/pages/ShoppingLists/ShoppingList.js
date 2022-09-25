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

const ShoppingList = ({ shoppingListId, shoppingListName, ownerId, users }) => {
  const {
    darkTheme,
    smallScreen,
    listItems,
    selectedAction,
    setSelectedAction,
    handleCloseAction,
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
        headerActions={
          shoppingListId !== various.noShoppingList && smallScreen ? (
            <Dropdown
              hideOnClick
              dropdownButton={<DropdownMenuButton />}
              dropdownContent={
                <ShoppingListActionButtons
                  setSelectedAction={setSelectedAction}
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
                setSelectedAction={setSelectedAction}
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

          <ShoppingListItemsList items={listItems} />
        </div>
      </Accordion>
    </div>
  );
};

export default ShoppingList;
