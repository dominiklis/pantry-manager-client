import { various } from "constantStrings";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, editShoppingListItem } from "store/actions";

const useEditShoppingListItem = ({
  componentName,
  shoppingListItemId,
  shoppingListItemName,
  amount,
  selected,
  shoppingListId,
}) => {
  const { defaultShoppingListId } = useSelector((state) => state.users.user);

  const [input, setInput] = useState({
    shoppingListItemName: shoppingListItemName ?? "",
    amount: amount ?? "",
    shoppingListId:
      shoppingListId === defaultShoppingListId
        ? various.noShoppingList
        : shoppingListId,
  });

  const [errors, setErrors] = useState({
    shoppingListItemName: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    await dispatch(
      editShoppingListItem({
        shoppingListItemId,
        selected,
        ...input,
        shoppingListId:
          !input.shoppingListId ||
          input.shoppingListId === various.noShoppingList
            ? defaultShoppingListId
            : input.shoppingListId,
      })
    );

    setLoading(false);

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "changesSavedToast",
        },
      })
    );
  };

  const dispatch = useDispatch();

  return { input, setInput, errors, setErrors, loading, handleSubmit };
};

export default useEditShoppingListItem;
