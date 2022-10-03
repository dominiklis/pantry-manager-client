import { toastColors } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToast,
  editShoppingListAccess,
  editStorageAccess,
  removeShoppingListAccess,
  removeShoppingListFromStore,
  removeStorageAccess,
  removeStorageFromStore,
} from "store/actions";

const useUsersWithAccessListItem = ({
  componentName,
  isShoppingList,
  id,
  userId,
  canShare,
}) => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [canShareInput, setCanShareInput] = useState(canShare);

  const handleEditButton = () => setEditing(true);
  const handleCancelEditing = () => setEditing(false);

  const handleCheckboxChange = () => setCanShareInput((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = null;

    if (isShoppingList)
      result = await dispatch(
        editShoppingListAccess({
          shoppingListId: id,
          userId,
          canShare: canShareInput,
        })
      );
    else
      result = await dispatch(
        editStorageAccess({
          storageId: id,
          userId,
          canShare: canShareInput,
        })
      );

    if (result?.error) {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: "errorEditToast",
          },
          color: toastColors.error,
        })
      );
    } else {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: "submitSuccessToast",
          },
        })
      );
    }

    setEditing(false);
  };

  const { userId: loggedUserId } = useSelector((state) => state.users.user);

  const handleDelete = async () => {
    let result = null;

    if (isShoppingList) {
      result = await dispatch(
        removeShoppingListAccess({ shoppingListId: id, userId })
      );
    } else {
      result = await dispatch(removeStorageAccess({ storageId: id, userId }));
    }

    if (userId === loggedUserId) {
      if (isShoppingList) {
        dispatch(removeShoppingListFromStore(id));
      } else {
        dispatch(removeStorageFromStore(id));
      }
    }

    if (result?.error) {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: "errorDeleteToast",
          },
          color: toastColors.error,
        })
      );
    } else {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: "removingSuccessToast",
          },
        })
      );
    }
  };

  const {
    editAccess: editAccessToStorageLoading,
    removeAccess: removeAccessToStorageLoading,
  } = useSelector((state) => state.storages.loading);

  const {
    editAccess: editAccessToListLoading,
    removeAccess: removeAccesstoListLoading,
  } = useSelector((state) => state.shoppingLists.loading);

  const darkTheme = useIsDarkTheme();

  return {
    canShareInput,
    handleSubmit,
    editing,
    handleDelete,
    loggedUserId,
    handleCheckboxChange,
    handleEditButton,
    handleCancelEditing,
    editAccessLoading: editAccessToStorageLoading || editAccessToListLoading,
    removeAccessLoading:
      removeAccessToStorageLoading || removeAccesstoListLoading,
    darkTheme,
  };
};

export default useUsersWithAccessListItem;
