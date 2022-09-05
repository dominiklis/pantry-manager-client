import { Button, Input, Translate } from "components";
import {
  SelectShoppingList,
  useAddProductToShoppingList,
} from "components/Product";
import { componentColors } from "constantStrings";
import React from "react";

import styles from "./AddProductToShoppingList.module.css";

const componentName = "AddProductToShoppingList";

const AddProductToShoppingList = ({
  productId,
  selectedShoppingListId,
  onSubmit,
}) => {
  const {
    loading,
    input,
    errors,
    handleChange,
    handleShoppingListChange,
    handleSubmit,
  } = useAddProductToShoppingList({
    productId,
    selectedShoppingListId,
    componentName,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="shoppingListItemName"
        label={<Translate section={componentName} text="name" />}
        value={input.shoppingListItemName}
        onChange={handleChange}
        error={errors.shoppingListItemName}
        autoFocus
      />

      <Input
        type="text"
        name="amount"
        label={<Translate section={componentName} text="amount" />}
        value={input.amount}
        onChange={handleChange}
        error={errors.amount}
      />

      <SelectShoppingList
        label={<Translate section={componentName} text="shoppingListLabel" />}
        selectedShoppingList={input.shoppingListId}
        onChange={handleShoppingListChange}
      />

      <div className={styles.submitButtonWrapper}>
        <Button
          type="submit"
          backgroundColor={componentColors.primary}
          disabled={
            !input.shoppingListItemName ||
            errors.shoppingListItemName ||
            errors.amount
          }
          loading={loading}
        >
          <Translate section={componentName} text="addItem" />
        </Button>
      </div>
    </form>
  );
};

export default AddProductToShoppingList;
