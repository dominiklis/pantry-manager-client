import {
  filterProductsBy,
  highlightProducts,
  sortByValues,
} from "constantStrings";
import { useHandleProductsList } from "hooks";
import { useEffect, useMemo, useState } from "react";
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

  const [sortBy, setSortBy] = useState(sortByValues.nameAsc);
  const [highlight, setHighlight] = useState(highlightProducts.none);
  const [filterBy, setFilterBy] = useState(filterProductsBy.all);

  const {
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  } = useHandleProductsList({
    selectProductsOptions: { labelId: label?.labelId, getProductBody: true },
    sortBy,
    highlight,
    filterBy,
    setSortByFunction: setSortBy,
    setHighlightFunction: setHighlight,
    setFilterByFunction: setFilterBy,
  });

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
        labelId: label.labelId,
      })
    );
  }, [dispatch, label.labelId]);

  return {
    products,
    sortBy,
    highlight,
    filterBy,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
    label,
    handleDeleteLabel,
    loading,
  };
};

export default useLabel;
