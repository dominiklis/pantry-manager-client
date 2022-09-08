import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, createShoppingListItem } from "store/actions";

const useCreateShoppingListItem = ({ componentName }) => {
  const { create: loading } = useSelector(
    (state) => state.shoppingListItems.loading
  );

  const [input, setInput] = useState({
    shoppingListItemName: "",
    quantity: "",
    shoppingListId: null,
  });

  const [errors, setErrors] = useState({
    shoppingListItemName: "",
    quantity: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createShoppingListItem(input));

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
