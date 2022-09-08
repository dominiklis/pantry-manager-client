import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, createShoppingList } from "store/actions";

const useCreateShoppingList = ({ componentName }) => {
  const dispatch = useDispatch();
  const { create: loading } = useSelector(
    (state) => state.shoppingLists.loading
  );

  const [shoppingListName, setShoppingListName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createShoppingList(shoppingListName));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "listCreatedToast",
        },
      })
    );

    setShoppingListName("");
  };

  return {
    shoppingListName,
    setShoppingListName,
    error,
    setError,
    loading,
    handleSubmit,
  };
};

export default useCreateShoppingList;
