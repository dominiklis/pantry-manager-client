import { createOverlay } from "constantStrings";
import { useSelector } from "react-redux";

const useCreateOverlay = () => {
  const { selectedTab, storageId, labelId, shoppingListId } = useSelector(
    (state) => state.app.createOverlay
  );

  let initialAction = 0;
  switch (selectedTab) {
    case createOverlay.tabs.createProduct:
    default:
      initialAction = 0;
      break;

    case createOverlay.tabs.createStorage:
      initialAction = 1;
      break;

    case createOverlay.tabs.createLabel:
      initialAction = 2;
      break;

    case createOverlay.tabs.createShoppingList:
      initialAction = 3;
      break;

    case createOverlay.tabs.createShoppingListItem:
      initialAction = 4;
      break;
  }

  return {
    initialAction,
    storageId,
    labelId,
    shoppingListId,
  };
};

export default useCreateOverlay;
