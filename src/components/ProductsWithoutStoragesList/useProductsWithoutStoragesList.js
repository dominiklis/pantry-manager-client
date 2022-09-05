import {
  filterProductsBy,
  highlightProducts,
  sortProductsBy,
} from "constantStrings";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { makeSelectProducts } from "store/selectors";

const useProductsWithoutStoragesList = ({ className }) => {
  const [sortBy, setSortBy] = useState(sortProductsBy.sortByNameAsc);
  const [highlight, setHighlight] = useState(highlightProducts.none);
  const [filterBy, setFilterBy] = useState(filterProductsBy.all);

  const selectProducts = useMemo(makeSelectProducts, []);
  const products = useSelector((state) =>
    selectProducts(state, {
      sortBy,
      filterBy,
      withoutStorage: true,
    })
  );

  const handleSortByChange = (value) => setSortBy(value);
  const handleHighlightChange = (value) => setHighlight(value);
  const handleFilterByChange = (value) => setFilterBy(value);

  const getContainerStyles = () => {
    let res = "";

    if (className) res += ` ${className}`;

    return res;
  };

  return {
    sortBy,
    highlight,
    filterBy,
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
    getContainerStyles,
  };
};

export default useProductsWithoutStoragesList;
