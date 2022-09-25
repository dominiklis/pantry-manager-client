import { useSelectStorage } from "components/Product";
import { useIsDarkTheme, useIsSmallScreen } from "hooks";
import { useMemo, useState } from "react";
import { makeSelectShoppingListItems } from "store/selectors";

const useShoppingList = ({ shoppingListId }) => {
  const darkTheme = useIsDarkTheme();

  const selectShoppingListItems = useMemo(makeSelectShoppingListItems, []);
  const listItems = useSelectStorage((state) =>
    selectShoppingListItems(state, {
      shoppingListId,
    })
  );

  const smallScreen = useIsSmallScreen();

  const [selectedAction, setSelectedAction] = useState(-1);
  const handleCloseAction = () => setSelectedAction(-1);

  return {
    darkTheme,
    smallScreen,
    setSelectedAction,
    listItems,
    selectedAction,
    handleCloseAction,
  };
};

export default useShoppingList;
