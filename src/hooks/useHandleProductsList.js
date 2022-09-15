import {
  filterProductsBy,
  highlightProducts,
  sortByValues,
} from "constantStrings";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { makeSelectProducts } from "store/selectors";

const useHandleProductsList = (selectProductsOptions) => {
  const [sortBy, setSortBy] = useState(sortByValues.nameAsc);
  const [highlight, setHighlight] = useState(highlightProducts.none);
  const [filterBy, setFilterBy] = useState(filterProductsBy.all);

  const selectProducts = useMemo(makeSelectProducts, []);
  const products = useSelector((state) =>
    selectProducts(state, { ...selectProductsOptions, sortBy, filterBy })
  );

  const handleSortByChange = (value) => setSortBy(value);
  const handleHighlightChange = (value) => setHighlight(value);
  const handleFilterByChange = (value) => setFilterBy(value);

  return {
    sortBy,
    highlight,
    filterBy,
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  };
};

export default useHandleProductsList;
