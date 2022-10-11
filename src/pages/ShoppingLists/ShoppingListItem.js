import { Accordion, Button } from "components";
import { componentColors } from "constantStrings";
import {
  ShoppingListItemActions,
  ShoppingListItemHeader,
  useShoppingListItem,
} from "pages/ShoppingLists";
import React from "react";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

const ShoppingListItem = ({ shoppingListItemId }) => {
  const { handleSubmit, shoppingListItem, loading } = useShoppingListItem({
    shoppingListItemId,
  });

  return (
    <Accordion
      id={shoppingListItemId}
      actionsBeforeHeader={
        <form onSubmit={handleSubmit}>
          <Button
            type="submit"
            iconButton
            icon={
              shoppingListItem.selected ? (
                <IoCheckboxOutline />
              ) : (
                <IoSquareOutline />
              )
            }
            onClick={(e) => e.stopPropagation()}
            loading={loading}
            backgroundColor={componentColors.transparent}
          />
        </form>
      }
      header={<ShoppingListItemHeader {...shoppingListItem} />}
    >
      <ShoppingListItemActions {...shoppingListItem} />
    </Accordion>
  );
};

export default ShoppingListItem;
