const { createMenuTabs } = require("constantStrings");
const { useSelector } = require("react-redux");

const useCreateMenu = () => {
  const { selectedTab, storageId, labelId, shoppingListId } = useSelector(
    (state) => state.app.createMenu
  );

  let initialAction = 0;
  switch (selectedTab) {
    case createMenuTabs.createProduct:
    default:
      initialAction = 0;
      break;

    case createMenuTabs.createStorage:
      initialAction = 1;
      break;

    case createMenuTabs.createLabel:
      initialAction = 2;
      break;

    case createMenuTabs.createShoppingList:
      initialAction = 3;
      break;

    case createMenuTabs.createShoppingListItem:
      initialAction = 4;
      break;
  }

  return { initialAction, storageId, labelId, shoppingListId };
};

export default useCreateMenu;
