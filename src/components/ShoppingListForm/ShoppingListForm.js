import { Button, Input, Translate } from "components";
import { componentColors } from "constantStrings";
import React from "react";
import { validateInput } from "utils";
import styles from "./ShoppingListForm.module.css";

const componentName = "ShoppingListForm";

const ShoppingListForm = ({
  shoppingListName,
  setShoppingListName,
  error,
  setError,
  loading,
  onSubmit,
  submitButtonText,
}) => {
  const handleChange = (e) => {
    setShoppingListName(e.target.value);

    const err = validateInput(e.target.name, e.target.value);

    setError(err);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        name="shoppingListName"
        label={<Translate section={componentName} text="nameInputLabel" />}
        onChange={handleChange}
        value={shoppingListName}
        error={error}
        autoFocus
      />

      <div className={styles.submitButtonWrapper}>
        <Button
          backgroundColor={componentColors.primary}
          disabled={!shoppingListName || error}
          loading={loading}
        >
          {submitButtonText}
        </Button>
      </div>
    </form>
  );
};

export default ShoppingListForm;
