import { createOverlay } from "constantStrings";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { setCreateOverlay } from "store/actions";
import { useSelector } from "react-redux";
import { makeSelectShoppingLists } from "store/selectors";
import { useScrollToElement } from "hooks";
import { sortByValues } from "constantStrings";

const useShoppingLists = () => {
  useScrollToElement();

  const [sortBy, setSortBy] = useState(sortByValues.nameAsc);

  const handleSortByButton = () =>
    setSortBy((prev) => {
      if (prev === sortByValues.nameAsc) return sortByValues.nameDesc;

      return sortByValues.nameAsc;
    });

  const selectShoppingLists = useMemo(makeSelectShoppingLists, []);
  const shoppingLists = useSelector((state) =>
    selectShoppingLists(state, { sortBy })
  );

  const shoppingListItems = useSelector(
    (state) => state.shoppingListItems.allIds
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCreateOverlay({
        selectedTab: createOverlay.tabs.createShoppingList,
      })
    );
  }, [dispatch]);

  return { shoppingListItems, shoppingLists, handleSortByButton, sortBy };
};

export default useShoppingLists;
