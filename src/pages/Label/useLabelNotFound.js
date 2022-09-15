import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToast, createLabel } from "store/actions";

const useLabelNotFound = ({ componentName }) => {
  const { labelName } = useParams();
  const { create: loading } = useSelector((state) => state.labels.loading);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createLabel(labelName));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "labelCraeteToast",
        },
      })
    );
  };

  return { handleSubmit, loading, labelName };
};

export default useLabelNotFound;
