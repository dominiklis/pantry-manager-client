import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToast, createShoppingList } from "store/actions";

const useCreateShoppingList = ({ componentName }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { create: loading } = useSelector(
    (state) => state.shoppingLists.loading
  );

  const [shoppingListName, setShoppingListName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      createShoppingList(shoppingListName)
    ).unwrap();

    if (result?.shoppingListId) navigate(`/lists#${result.shoppingListId}`);

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
