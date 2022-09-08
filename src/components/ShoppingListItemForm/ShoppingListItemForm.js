import { Button, Input, SelectShoppingList, Translate } from "components";
import { componentColors, various } from "constantStrings";
import React from "react";
import { validateInput } from "utils";
import styles from "./ShoppingListItemForm.module.css";

const componentName = "ShoppingListItemForm";

const ShoppingListItemForm = ({
  input,
  setInput,
  errors,
  setErrors,
  loading,
  onSubmit,
  submitButtonText,
}) => {
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const err = validateInput(e.target.name, e.target.value);

    setErrors((prev) => ({ ...prev, [e.target.name]: err }));
  };

  const handleShoppingListChange = (shoppingListId) => {
    if (shoppingListId === various.noShoppingList) shoppingListId = null;

    setInput((prev) => ({
      ...prev,
      shoppingListId,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        name="shoppingListItemName"
        label={<Translate section={componentName} text="nameInputLabel" />}
        onChange={handleChange}
        value={input.shoppingListItemName}
        error={errors.shoppingListItemName}
        autoFocus
      />
      <Input
        type="text"
        name="quantity"
        label={<Translate section={componentName} text="quantityLabel" />}
        value={input.quantity}
        onChange={handleChange}
      />

      <SelectShoppingList
        label={<Translate section={componentName} text="shoppingListLabel" />}
        selectedShoppingList={input.shoppingListId}
        onChange={handleShoppingListChange}
      />

      <div className={styles.submitButtonWrapper}>
        <Button
          backgroundColor={componentColors.primary}
          disabled={
            !input.shoppingListItemName ||
            errors.shoppingListItemName ||
            errors.quantity
          }
          loading={loading}
        >
          {submitButtonText}
        </Button>
      </div>
    </form>
  );
};

export default ShoppingListItemForm;
