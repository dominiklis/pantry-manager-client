import { createOverlay } from "constantStrings";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setCreateOverlay, setShoppingListsSortListsBy } from "store/actions";
import { useSelector } from "react-redux";
import { makeSelectShoppingLists } from "store/selectors";
import { useScrollToElement } from "hooks";

const useShoppingLists = () => {
  useScrollToElement();

  const { sortListsByName } = useSelector((state) => state.pages.shoppingLists);

  const dispatch = useDispatch();

  const handleSortByButton = () => {
    dispatch(setShoppingListsSortListsBy());
  };

  const selectShoppingLists = useMemo(makeSelectShoppingLists, []);
  const shoppingLists = useSelector((state) =>
    selectShoppingLists(state, { sortBy: sortListsByName })
  );

  const shoppingListItems = useSelector(
    (state) => state.shoppingListItems.allIds
  );

  useEffect(() => {
    dispatch(
      setCreateOverlay({
        selectedTab: createOverlay.tabs.createShoppingList,
      })
    );
  }, [dispatch]);

  return {
    shoppingListItems,
    shoppingLists,
    handleSortByButton,
    sortListsByName,
  };
};

export default useShoppingLists;
