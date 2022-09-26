import { createOverlay, various } from "constantStrings";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToast,
  deleteLabel,
  deleteLabelInProducts,
  setCreateOverlay,
} from "store/actions";
import { makeSelectLabelsDetails } from "store/selectors";

const useLabel = ({ componentName }) => {
  const { labelName } = useParams();

  const { delete: loading } = useSelector((state) => state.labels.loading);

  const selectLabel = useMemo(makeSelectLabelsDetails, []);
  const label = useSelector((state) =>
    selectLabel(state, {
      labelName,
    })
  );

  const dispatch = useDispatch();

  const handleDeleteLabel = async (e) => {
    e.preventDefault();

    await dispatch(deleteLabel(label.labelId));
    dispatch(deleteLabelInProducts(label.labelId));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "labelDeletedToast",
        },
      })
    );
  };

  useEffect(() => {
    dispatch(
      setCreateOverlay({
        selectedTab: createOverlay.tabs.createProduct,
        storageId: various.noStorage,
        labelId: label.labelId,
      })
    );
  }, [dispatch, label.labelId]);

  return { label, handleDeleteLabel, loading };
};

export default useLabel;
