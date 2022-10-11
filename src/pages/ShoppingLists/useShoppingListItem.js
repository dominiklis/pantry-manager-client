import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editShoppingListItem } from "store/actions";

const useShoppingListItem = ({ shoppingListItemId }) => {
  const shoppingListItem = useSelector(
    (state) => state.shoppingListItems.byId[shoppingListItemId]
  );

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await dispatch(
      editShoppingListItem({
        shoppingListItemId: shoppingListItem.shoppingListItemId,
        shoppingListItemName: shoppingListItem.shoppingListItemName,
        quantity: shoppingListItem.quantity,
        ownerId: shoppingListItem.ownerId,
        shoppingListId: shoppingListItem.shoppingListId,
        selected: !shoppingListItem.selected,
      })
    );

    setLoading(false);
  };

  return { handleSubmit, shoppingListItem, loading };
};

export default useShoppingListItem;
