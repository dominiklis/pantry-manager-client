import { NoItemsToDisplay, ShoppingListItem } from "pages/ShoppingLists";
import React from "react";

const ShoppingListItemsList = ({ items }) => {
  if (!items?.length) {
    return <NoItemsToDisplay />;
  }

  return (
    <ul>
      {items
        .filter((item) => !item.selected)
        .map((item) => (
          <li key={item.shoppingListItemId}>
            <ShoppingListItem shoppingListItemId={item.shoppingListItemId} />
          </li>
        ))}

      {items
        .filter((item) => item.selected)
        .map((item) => (
          <li key={item.shoppingListItemId}>
            <ShoppingListItem
              shoppingListItemId={item.shoppingListItemId}
              hideAmount
            />
          </li>
        ))}
    </ul>
  );
};

export default ShoppingListItemsList;
