import { toastColors } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToast,
  editStorageAccess,
  removeStorageAccess,
  removeStorageFromStore,
} from "store/actions";

const useUsersWithAccessListItem = ({
  componentName,
  storageId,
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

    const result = await dispatch(
      editStorageAccess({
        storageId,
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
    const result = await dispatch(removeStorageAccess({ storageId, userId }));
    if (userId === loggedUserId) {
      dispatch(removeStorageFromStore(storageId));
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

  const { editAccess: editAccessLoading, removeAccess: removeAccessLoading } =
    useSelector((state) => state.storages.loading);

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
    editAccessLoading,
    removeAccessLoading,
    darkTheme,
  };
};

export default useUsersWithAccessListItem;
