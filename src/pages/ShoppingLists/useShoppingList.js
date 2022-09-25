import { useControlledActions, useIsDarkTheme } from "hooks";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectShoppingListItems } from "store/selectors";

const useShoppingList = ({ shoppingListId }) => {
  const darkTheme = useIsDarkTheme();

  const selectShoppingListItems = useMemo(makeSelectShoppingListItems, []);
  const listItems = useSelector((state) =>
    selectShoppingListItems(state, {
      shoppingListId,
    })
  );

  const { selectedAction, setSelectedAction, handleCloseAction } =
    useControlledActions();

  return {
    darkTheme,
    listItems,
    selectedAction,
    setSelectedAction,
    handleCloseAction,
  };
};

export default useShoppingList;
