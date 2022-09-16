import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, editShoppingList } from "store/actions";

const useEditShoppingList = ({
  shoppingListId,
  shoppingListName,
  componentName,
}) => {
  const dispatch = useDispatch();
  const { edit: loading } = useSelector((state) => state.shoppingLists.loading);

  const [name, setName] = useState(shoppingListName ?? "");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      editShoppingList({
        shoppingListId,
        shoppingListName: name,
      })
    );

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "listEditedToast",
        },
      })
    );
  };

  return { name, setName, error, setError, loading, handleSubmit };
};

export default useEditShoppingList;
