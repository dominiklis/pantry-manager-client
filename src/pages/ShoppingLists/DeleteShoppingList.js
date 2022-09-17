import { DeleteWithItems, Translate } from "components";
import { useDeleteShoppingList } from "pages/ShoppingLists";
import React from "react";

const componentName = "DeleteShoppingList";

const DeleteShoppingList = ({ shoppingListId, noItems }) => {
  const {
    loading,
    handleDeleteButton,
    handleDeleteAllButton,
    handleKeepButton,
  } = useDeleteShoppingList({
    componentName,
    shoppingListId,
  });

  return (
    <DeleteWithItems
      noItems={noItems}
      questionAboutEmptyText={
        <Translate section={componentName} text="questionAboutDeletingEmpty" />
      }
      deleteEmptyButtonText={
        <Translate section={componentName} text="deleteButtonText" />
      }
      onDeleteEmpty={handleDeleteButton}
      questionNotEmptyText={
        <Translate section={componentName} text="questionAboutItems" />
      }
      onDeleteAllButton={handleDeleteAllButton}
      deleteWthItemsButtonText={
        <Translate section={componentName} text="deleteAll" />
      }
      onKeepItemsButton={handleKeepButton}
      deleteWithoutItemsButtonText={
        <Translate section={componentName} text="keep" />
      }
      loading={loading}
    />
  );
};

export default DeleteShoppingList;
