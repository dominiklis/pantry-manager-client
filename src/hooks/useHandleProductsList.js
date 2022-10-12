import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectProducts } from "store/selectors";

const useHandleProductsList = ({
  selectProductsOptions,
  sortBy,
  filterBy,
  setSortByDispatchAction,
  setHighlightDispatchAction,
  setFilterByDispatchAction,
}) => {
  const dispatch = useDispatch();

  const selectProducts = useMemo(makeSelectProducts, []);
  const products = useSelector((state) =>
    selectProducts(state, { ...selectProductsOptions, sortBy, filterBy })
  );

  const handleSortByChange = (value) => {
    dispatch(setSortByDispatchAction(value));
  };
  const handleHighlightChange = (value) => {
    dispatch(setHighlightDispatchAction(value));
  };
  const handleFilterByChange = (value) => {
    dispatch(setFilterByDispatchAction(value));
  };

  return {
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  };
};

export default useHandleProductsList;
