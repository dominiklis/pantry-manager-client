import { storageColors } from "constantStrings";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      createStorage({
        storageName: input.storageName,
        color: input.color,
        numberOfDaysForWarning: input.numberOfDaysForWarning || null,
      })
    ).unwrap();

    if (result?.storageId) navigate(`/storages/${result.storageId}`);

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
