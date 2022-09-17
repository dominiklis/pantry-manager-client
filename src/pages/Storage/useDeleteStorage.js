import { useDispatch, useSelector } from "react-redux";
import {
  addToast,
  deleteProductsInStorage,
  deleteStorage,
  setStorageToNull,
} from "store/actions";

const useDeleteStorage = ({ storageId, componentName }) => {
  const { delete: loading } = useSelector((state) => state.storages.loading);

  const dispatch = useDispatch();

  const handleDeleteButton = async () => {
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

  const handleDeleteAllButton = async () => {
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

  const handleKeepButton = async () => {
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
    loading,
    handleDeleteButton,
    handleDeleteAllButton,
    handleKeepButton,
  };
};

export default useDeleteStorage;
