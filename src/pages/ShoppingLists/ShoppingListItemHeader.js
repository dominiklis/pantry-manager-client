import { Button } from "components";
import { componentColors } from "constantStrings";
import { useShoppingListItemHeader } from "pages/ShoppingLists";
import React from "react";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import styles from "./ShoppingListItemHeader.module.css";

const ShoppingListItemHeader = ({
  shoppingListItemId,
  shoppingListItemName,
  amount,
  selected,
  ownerId,
  shoppingListId,
}) => {
  const { getContainerStyles, darkTheme, handleSubmit, loading } =
    useShoppingListItemHeader({
      shoppingListItemId,
      shoppingListItemName,
      amount,
      selected,
      ownerId,
      shoppingListId,
    });

  return (
    <div className={getContainerStyles()} data-dark-theme={darkTheme}>
      <form onSubmit={handleSubmit}>
        <Button
          type="submit"
          iconButton
          icon={selected ? <IoCheckboxOutline /> : <IoSquareOutline />}
          onClick={(e) => e.stopPropagation()}
          loading={loading}
          backgroundColor={componentColors.transparent}
        />
      </form>
      <span>{shoppingListItemName}</span>
      <span className={styles.amount}>{amount}</span>
    </div>
  );
};

export default ShoppingListItemHeader;
