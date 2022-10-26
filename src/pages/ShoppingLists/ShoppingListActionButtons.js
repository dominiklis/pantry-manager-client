import { ActionsButtonsList } from "components";
import { useShoppingListActionButtons } from "pages/ShoppingLists";
import React from "react";

const componentName = "ShoppingListActionButtons";

const ShoppingListActionButtons = ({
  shoppingListId,
  selectedAction,
  setSelectedAction,
  ownerId,
}) => {
  const { actionButtons } = useShoppingListActionButtons({
    componentName,
    shoppingListId,
    selectedAction,
    setSelectedAction,
    ownerId,
  });

  return <ActionsButtonsList buttons={actionButtons} />;
};

export default ShoppingListActionButtons;
