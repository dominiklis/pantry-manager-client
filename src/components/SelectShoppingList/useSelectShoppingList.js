import { Translate } from "components";
import { various } from "constantStrings";
import { useMemo } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { SelectOption } from "utils";

const useSelectShoppingList = ({ componentName }) => {
  const { byId: shoppingListsInStore, allIds: shoppingListsIds } = useSelector(
    (state) => state.shoppingLists
  );

  const selectStorageOptions = useMemo(() => {
    return [
      new SelectOption(
        various.noShoppingList,
        <Translate section={componentName} text="noShoppingOption" />,
        <IoClose />
      ),
      ...shoppingListsIds.map(
        (listId) =>
          new SelectOption(
            listId,
            shoppingListsInStore[listId].shoppingListName
          )
      ),
    ];
  }, [shoppingListsInStore, shoppingListsIds, componentName]);

  return { selectStorageOptions };
};

export default useSelectShoppingList;
