import { useIsDarkTheme } from "hooks";
import { useMemo, useState } from "react";
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

  const [selectedAction, setSelectedAction] = useState(-1);
  const handleCloseAction = () => setSelectedAction(-1);

  return {
    darkTheme,
    listItems,
    selectedAction,
    setSelectedAction,
    handleCloseAction,
  };
};

export default useShoppingList;
