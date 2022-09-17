import { CreateShoppingListItem } from "components";
import React from "react";

const AddItem = ({ shoppingListId }) => {
  return <CreateShoppingListItem chosenList={shoppingListId} />;
};

export default AddItem;
