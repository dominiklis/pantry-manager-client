import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToast, editLabel } from "store/actions";

const useEditLabel = ({ componentName, label }) => {
  const { edit: loading } = useSelector((state) => state.labels.loading);

  const [labelName, setLabelName] = useState(label.labelName);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(editLabel({ labelId: label.labelId, labelName }));
    navigate(`/labels/${labelName}`);

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "labelEditedToast",
        },
      })
    );
  };

  return { handleSubmit, labelName, setLabelName, error, setError, loading };
};

export default useEditLabel;
