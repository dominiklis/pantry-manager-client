import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToast,
  deleteItemsInList,
  deleteShoppingList,
  setListToNull,
} from "store/actions";

const useDeleteShoppingList = ({ componentName, shoppingListId }) => {
  const [selectedAction, setSelectedAction] = useState("");

  const dispatch = useDispatch();

  const { delete: loading } = useSelector(
    (state) => state.shoppingLists.loading
  );

  const handleDeleteButton = async (e) => {
    e.preventDefault();

    await dispatch(deleteShoppingList({ shoppingListId }));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "listDeletedToast",
        },
      })
    );
  };

  const handleDeleteAllButton = async (e) => {
    e.preventDefault();

    setSelectedAction("delete all");

    await dispatch(deleteShoppingList({ shoppingListId, deleteItems: true }));
    dispatch(deleteItemsInList(shoppingListId));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "itemsDeletedToast",
        },
      })
    );
  };

  const handleKeepButton = async (e) => {
    e.preventDefault();

    setSelectedAction("keep");

    await dispatch(deleteShoppingList({ shoppingListId, deleteItems: false }));
    dispatch(setListToNull(shoppingListId));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "listDeletedToast",
        },
      })
    );
  };

  return {
    loading,
    selectedAction,
    handleDeleteButton,
    handleDeleteAllButton,
    handleKeepButton,
  };
};

export default useDeleteShoppingList;
