import { useDispatch, useSelector } from "react-redux";
import {
  addToast,
  deleteItemsInList,
  deleteShoppingList,
  setListToNull,
} from "store/actions";

const useDeleteShoppingList = ({ componentName, shoppingListId }) => {
  const { delete: loading } = useSelector(
    (state) => state.shoppingLists.loading
  );

  const dispatch = useDispatch();

  const handleDeleteButton = async () => {
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

  const handleDeleteAllButton = async () => {
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

  const handleKeepButton = async () => {
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
    handleDeleteButton,
    handleDeleteAllButton,
    handleKeepButton,
  };
};

export default useDeleteShoppingList;
