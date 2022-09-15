import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToast, createLabel } from "store/actions";

const useCreateLabel = ({ componentName }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { create: loading } = useSelector((state) => state.labels.loading);

  const [labelName, setLabelName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(createLabel(labelName)).unwrap();

    if (result?.labelId) navigate(`/labels#${result.labelId}`);

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
