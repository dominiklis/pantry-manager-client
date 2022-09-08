import { ShoppingListForm, Translate } from "components";
import { useCreateShoppingList } from "components/Layout";
import React from "react";

const componentName = "CreateShoppingList";

const CreateShoppingList = () => {
  const {
    shoppingListName,
    setShoppingListName,
    error,
    setError,
    loading,
    handleSubmit,
  } = useCreateShoppingList({ componentName });

  return (
    <ShoppingListForm
      shoppingListName={shoppingListName}
      setShoppingListName={setShoppingListName}
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

export default CreateShoppingList;
