import { createOverlay } from "constantStrings";
import { useControlledActions, useIsDarkTheme } from "hooks";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateOverlay } from "store/actions";
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCreateOverlay({
        selectedTab: createOverlay.tabs.createShoppingList,
      })
    );
  }, [dispatch]);

  return {
    darkTheme,
    listItems,
    selectedAction,
    setSelectedAction,
    handleCloseAction,
  };
};

export default useShoppingList;
