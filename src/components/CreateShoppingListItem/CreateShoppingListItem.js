import { ShoppingListItemForm, Translate } from "components";
import { useCreateShoppingListItem } from "components/CreateShoppingListItem";
import React from "react";

const componentName = "CreateShoppingListItem";

const CreateShoppingListItem = ({ chosenList }) => {
  const { input, setInput, errors, setErrors, loading, handleSubmit } =
    useCreateShoppingListItem({
      componentName,
      chosenList,
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

export default CreateShoppingListItem;
