import { Accordion, Actions, Share, Translate } from "components";
import { various } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import {
  EditShoppingList,
  DeleteShoppingList,
  AddItem,
  ShoppingListItemsList,
} from "pages/ShoppingLists";
import React, { useMemo } from "react";
import { IoAdd, IoPencil, IoShareSocial, IoTrash } from "react-icons/io5";
import { useSelector } from "react-redux";
import { makeSelectShoppingListItems } from "store/selectors";
import { Action, sortByName } from "utils";
import styles from "./ShoppingList.module.css";

const componentName = "ShoppingList";

const ShoppingList = ({ shoppingListId, shoppingListName, ownerId, users }) => {
  const darkTheme = useIsDarkTheme();

  const selectShoppingListItems = useMemo(makeSelectShoppingListItems, []);
  const listItems = useSelector((state) =>
    selectShoppingListItems(state, {
      shoppingListId,
    })
  );

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
      >
        <div className={styles.content}>
          {shoppingListId === various.noShoppingList ? null : (
            <Actions
              className={styles.actions}
              actions={[
                new Action(
                  (
                    <Translate
                      section={componentName}
                      text="addItemActionHeader"
                    />
                  ),
                  <AddItem shoppingListId={shoppingListId} />,
                  (
                    <Translate
                      section={componentName}
                      text="addItemButtonText"
                    />
                  ),
                  <IoAdd />
                ),
                new Action(
                  <Translate section={componentName} text="editActionHeader" />,
                  (
                    <EditShoppingList
                      shoppingListId={shoppingListId}
                      shoppingListName={shoppingListName}
                    />
                  ),
                  <Translate section={componentName} text="editButtonText" />,
                  <IoPencil />
                ),
                new Action(
                  (
                    <Translate
                      section={componentName}
                      text="shareActionHeader"
                    />
                  ),
                  (
                    <Share
                      isShoppingList
                      id={shoppingListId}
                      ownerId={ownerId}
                      users={users ? sortByName([...users], "userName") : null}
                    />
                  ),
                  <Translate section={componentName} text="shareButtonText" />,
                  <IoShareSocial />
                ),
                new Action(
                  (
                    <Translate
                      section={componentName}
                      text="deleteActionHeader"
                    />
                  ),
                  (
                    <DeleteShoppingList
                      shoppingListId={shoppingListId}
                      noItems={!listItems || !listItems.length}
                    />
                  ),
                  <Translate section={componentName} text="deleteButtonText" />,
                  <IoTrash />
                ),
              ]}
            />
          )}

          <ShoppingListItemsList items={listItems} />
        </div>
      </Accordion>
    </div>
  );
};

export default ShoppingList;
