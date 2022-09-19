import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToast, editShoppingListItem } from "store/actions";

const useEditShoppingListItem = ({
  componentName,
  shoppingListItemId,
  shoppingListItemName,
  quantity,
  selected,
  shoppingListId,
}) => {
  const [input, setInput] = useState({
    shoppingListItemName: shoppingListItemName ?? "",
    quantity: quantity ?? "",
    shoppingListId: shoppingListId ?? "",
  });

  const [errors, setErrors] = useState({
    shoppingListItemName: "",
    quantity: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    await dispatch(
      editShoppingListItem({ shoppingListItemId, selected, ...input })
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
