import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, createLabel } from "store/actions";

const useCreateLabel = ({ componentName }) => {
  const dispatch = useDispatch();
  const { create: loading } = useSelector((state) => state.labels.loading);

  const [labelName, setLabelName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createLabel(labelName));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "labelCreatedToast",
        },
      })
    );

    setLabelName("");
  };

  return {
    labelName,
    setLabelName,
    error,
    setError,
    loading,
    handleSubmit,
  };
};

export default useCreateLabel;
