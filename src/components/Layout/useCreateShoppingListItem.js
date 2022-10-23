import { various } from "constantStrings";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToast, createShoppingListItem } from "store/actions";

const useCreateShoppingListItem = ({ componentName, selectedList }) => {
  const { create: loading } = useSelector(
    (state) => state.shoppingListItems.loading
  );

  const [input, setInput] = useState({
    shoppingListItemName: "",
    amount: "",
    shoppingListId: selectedList ?? "",
  });

  const [errors, setErrors] = useState({
    shoppingListItemName: "",
    amount: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { defaultShoppingListId } = useSelector((state) => state.users.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let shoppingListId = input.shoppingListId;

    if (!shoppingListId || shoppingListId === various.noShoppingList)
      shoppingListId = defaultShoppingListId;

    const result = await dispatch(
      createShoppingListItem({
        ...input,
        shoppingListId,
      })
    ).unwrap();

    if (result?.shoppingListItemId) {
      navigate(`/lists#${result.shoppingListItemId}`);
    }

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "itemCreatedToast",
        },
      })
    );

    setInput((prev) => ({
      shoppingListItemName: "",
      amount: "",
      shoppingListId: prev.shoppingListId,
    }));
  };

  return { input, setInput, errors, setErrors, loading, handleSubmit };
};

export default useCreateShoppingListItem;
