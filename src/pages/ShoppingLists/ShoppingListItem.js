import { Accordion } from "components";
import {
  ShoppingListItemActions,
  ShoppingListItemHeader,
} from "pages/ShoppingLists";
import React from "react";
import { useSelector } from "react-redux";

const ShoppingListItem = ({ shoppingListItemId }) => {
  const shoppingListItem = useSelector(
    (state) => state.shoppingListItems.byId[shoppingListItemId]
  );

  return (
    <Accordion
      id={shoppingListItemId}
      header={<ShoppingListItemHeader {...shoppingListItem} />}
    >
      <ShoppingListItemActions {...shoppingListItem} />
    </Accordion>
  );
};

export default ShoppingListItem;
