import { Actions, Translate } from "components";
import {
  AddItemToStorage,
  DeleteShoppingListItem,
  EditShoppingListItem,
} from "pages/ShoppingLists";
import React from "react";
import { IoBagAdd, IoPencil } from "react-icons/io5";
import { ActionWtihButton } from "utils";

const componentName = "ShoppingListItemActions";

const ShoppingListItemActions = ({
  shoppingListItemId,
  shoppingListItemName,
  quantity,
  selected,
  shoppingListId,
}) => {
  return (
    <Actions
      actions={[
        new ActionWtihButton(
          <Translate section={componentName} text="editActionHeader" />,
          (
            <EditShoppingListItem
              shoppingListItemId={shoppingListItemId}
              shoppingListItemName={shoppingListItemName}
              quantity={quantity}
              selected={selected}
              shoppingListId={shoppingListId}
            />
          ),
          <Translate section={componentName} text="editButtonText" />,
          <IoPencil />
        ),
        new ActionWtihButton(
          (
            <Translate
              section={componentName}
              text="createProductActionHeader"
            />
          ),
          <AddItemToStorage name={shoppingListItemName} />,
          <Translate section={componentName} text="createProductButtonText" />,
          <IoBagAdd />
        ),
      ]}
      additionalButtonsAfter={
        <DeleteShoppingListItem shoppingListItemId={shoppingListItemId} />
      }
    />
  );
};

export default ShoppingListItemActions;
