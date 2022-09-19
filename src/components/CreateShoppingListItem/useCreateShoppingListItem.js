import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToast, createShoppingListItem } from "store/actions";

const useCreateShoppingListItem = ({ componentName, chosenList }) => {
  const { create: loading } = useSelector(
    (state) => state.shoppingListItems.loading
  );

  const [input, setInput] = useState({
    shoppingListItemName: "",
    quantity: "",
    shoppingListId: chosenList ?? "",
  });

  const [errors, setErrors] = useState({
    shoppingListItemName: "",
    quantity: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      createShoppingListItem({
        ...input,
        shoppingListId: input.shoppingListId ? input.shoppingListId : null,
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

    setInput({
      shoppingListItemName: "",
      quantity: "",
      shoppingListId: null,
    });
  };

  return { input, setInput, errors, setErrors, loading, handleSubmit };
};

export default useCreateShoppingListItem;
