import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectProducts } from "store/selectors";

const useHandleProductsList = ({
  selectProductsOptions,
  sortBy,
  filterBy,
  setSortByDispatchAction,
  setSortByFunction,
  setHighlightDispatchAction,
  setHighlightFunction,
  setFilterByDispatchAction,
  setFilterByFunction,
}) => {
  const dispatch = useDispatch();

  const selectProducts = useMemo(makeSelectProducts, []);
  const products = useSelector((state) =>
    selectProducts(state, {
      ...selectProductsOptions,
      sortBy,
      filterBy,
    })
  );

  const handleSortByChange = (value) => {
    if (setSortByDispatchAction) dispatch(setSortByDispatchAction(value));

    setSortByFunction?.(value);
  };
  const handleHighlightChange = (value) => {
    if (setHighlightDispatchAction) dispatch(setHighlightDispatchAction(value));

    setHighlightFunction?.(value);
  };
  const handleFilterByChange = (value) => {
    if (setFilterByDispatchAction) dispatch(setFilterByDispatchAction(value));

    setFilterByFunction?.(value);
  };

  return {
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  };
};

export default useHandleProductsList;
