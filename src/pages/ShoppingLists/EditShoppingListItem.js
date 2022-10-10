import { ShoppingListItemForm, Translate } from "components";
import { useEditShoppingListItem } from "pages/ShoppingLists";
import React from "react";

const componentName = "EditShoppingListItem";

const EditShoppingListItem = ({
  shoppingListItemId,
  shoppingListItemName,
  amount,
  selected,
  shoppingListId,
}) => {
  const { input, setInput, errors, setErrors, loading, handleSubmit } =
    useEditShoppingListItem({
      componentName,
      shoppingListItemId,
      shoppingListItemName,
      amount,
      selected,
      shoppingListId,
    });

  return (
    <ShoppingListItemForm
      input={input}
      setInput={setInput}
      errors={errors}
      setErrors={setErrors}
      loading={loading}
      onSubmit={handleSubmit}
      submitButtonText={
        <Translate section={componentName} text="submitButtonText" />
      }
    />
  );
};

export default EditShoppingListItem;
