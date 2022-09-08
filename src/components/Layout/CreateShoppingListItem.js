import { ShoppingListItemForm, Translate } from "components";
import { useCreateShoppingListItem } from "components/Layout";
import React from "react";

const componentName = "CreateShoppingListItem";

const CreateShoppingListItem = () => {
  const { input, setInput, errors, setErrors, loading, handleSubmit } =
    useCreateShoppingListItem({
      componentName,
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
