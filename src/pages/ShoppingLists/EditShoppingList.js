import { ShoppingListForm, Translate } from "components";
import { useEditShoppingList } from "pages/ShoppingLists";
import React from "react";

const componentName = "EditShoppingList";

const EditShoppingList = ({ shoppingListId, shoppingListName }) => {
  const { name, setName, error, setError, loading, handleSubmit } =
    useEditShoppingList({
      shoppingListName,
      shoppingListId,
      componentName,
    });

  return (
    <ShoppingListForm
      shoppingListName={name}
      setShoppingListName={setName}
      error={error}
      setError={setError}
      loading={loading}
      onSubmit={handleSubmit}
      submitButtonText={
        <Translate section={componentName} text="submitButtonText" />
      }
    />
  );
};

export default EditShoppingList;
