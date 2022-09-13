import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToast,
  deleteProductsInStorage,
  deleteStorage,
  setStorageToNull,
} from "store/actions";

const useDeleteStorage = ({ storageId, componentName }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteAllButton = async () => {
    setLoading(true);

    await dispatch(deleteStorage({ storageId, deleteProducts: true }));
    dispatch(deleteProductsInStorage(storageId));

    setLoading(false);

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "productsDeletedToast",
        },
      })
    );
  };

  const handleKeepButton = async () => {
    setLoading(true);

    await dispatch(deleteStorage({ storageId, deleteProducts: false }));
    dispatch(setStorageToNull(storageId));

    setLoading(false);

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
    handleDeleteAllButton,
    loading,
    handleKeepButton,
  };
};

export default useDeleteStorage;
