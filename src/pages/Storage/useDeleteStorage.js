import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToast,
  deleteProductsInStorage,
  deleteStorage,
  setStorageToNull,
} from "store/actions";

const useDeleteStorage = ({ storageId, componentName }) => {
  const [selectedAction, setSelectedAction] = useState("");

  const { delete: loading } = useSelector((state) => state.storages.loading);

  const dispatch = useDispatch();

  const handleDeleteButton = async (e) => {
    e.preventDefault();

    await dispatch(deleteStorage({ storageId, deleteProducts: true }));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "storageDeletedToast",
        },
      })
    );
  };

  const handleDeleteAllButton = async (e) => {
    e.preventDefault();

    setSelectedAction("delete all");

    await dispatch(deleteStorage({ storageId, deleteProducts: true }));
    dispatch(deleteProductsInStorage(storageId));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "productsDeletedToast",
        },
      })
    );
  };

  const handleKeepButton = async (e) => {
    e.preventDefault();

    setSelectedAction("keep");

    await dispatch(deleteStorage({ storageId, deleteProducts: false }));
    dispatch(setStorageToNull(storageId));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "storageDeletedToast",
        },
      })
    );
  };

  return {
    handleDeleteButton,
    handleDeleteAllButton,
    handleKeepButton,
    loading,
    selectedAction,
  };
};

export default useDeleteStorage;
