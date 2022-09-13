import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, editStorage } from "store/actions";

const useEditStorage = ({
  componentName,
  storageId,
  storageName,
  color,
  numberOfDaysForWarning,
}) => {
  const [input, setInput] = useState({
    storageName: storageName,
    color: color,
    numberOfDaysForWarning: numberOfDaysForWarning ?? "",
  });

  const [errors, setErrors] = useState({
    storageName: "",
    numberOfDaysForWarning: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      editStorage({
        storageId: storageId,
        storageName: input.storageName,
        color: input.color,
        numberOfDaysForWarning: input.numberOfDaysForWarning,
      })
    );

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "toastText",
        },
      })
    );
  };
  const { edit: loading } = useSelector((state) => state.storages.loading);

  return { input, setInput, errors, setErrors, handleSubmit, loading };
};

export default useEditStorage;
