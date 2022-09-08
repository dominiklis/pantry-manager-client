import { storageColors } from "constantStrings";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, createStorage } from "store/actions";

const useCreateStorage = ({ componentName }) => {
  const { create: loading } = useSelector((state) => state.storages.loading);

  const [input, setInput] = useState({
    storageName: "",
    numberOfDaysForWarning: "",
    color: storageColors.white,
  });

  const [errors, setErrors] = useState({
    storageName: "",
    numberOfDaysForWarning: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      createStorage({
        storageName: input.storageName,
        color: input.color,
        numberOfDaysForWarning: input.numberOfDaysForWarning || null,
      })
    );

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "createStorageToast",
        },
      })
    );

    setInput({
      storageName: "",
      numberOfDaysForWarning: "",
      color: storageColors.white,
    });
  };

  return {
    loading,
    input,
    setInput,
    errors,
    setErrors,
    handleSubmit,
  };
};

export default useCreateStorage;
