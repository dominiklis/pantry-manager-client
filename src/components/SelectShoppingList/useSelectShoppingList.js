import { Translate } from "components";
import { sortByValues, various } from "constantStrings";
import { useMemo } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { makeSelectShoppingLists } from "store/selectors";
import { SelectOption } from "utils";

const useSelectShoppingList = ({ componentName }) => {
  const selectShoppingLists = useMemo(makeSelectShoppingLists, []);
  const shoppingLists = useSelector((state) =>
    selectShoppingLists(state, { sortBy: sortByValues.nameAsc })
  );

  const selectStorageOptions = useMemo(() => {
    return [
      new SelectOption(
        various.noShoppingList,
        <Translate section={componentName} text="noShoppingOption" />,
        <IoClose />
      ),
      ...shoppingLists.map(
        (shoppingLists) =>
          new SelectOption(
            shoppingLists.shoppingListId,
            shoppingLists.shoppingListName
          )
      ),
    ];
  }, [componentName, shoppingLists]);

  return { selectStorageOptions };
};

export default useSelectShoppingList;
