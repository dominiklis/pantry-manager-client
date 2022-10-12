import { filterProductsBy, sortByValues } from "constantStrings";
import { useGroupProductsByStorages } from "hooks";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectProducts, makeSelectStorages } from "store/selectors";

const useExpiredProducts = () => {
  // select expired products
  const selectExpired = useMemo(makeSelectProducts, []);
  const expiredProducts = useSelector((state) =>
    selectExpired(state, {
      sortBy: sortByValues.expDateAsc,
      filterBy: filterProductsBy.expired,
      getProductBody: true,
    })
  );

  // group products by their storages
  const { storageIds, productsGroupedByStorages } =
    useGroupProductsByStorages(expiredProducts);

  // get storages from redux store
  const selectMultipleStorages = useMemo(makeSelectStorages, []);
  const storages = useSelector((state) =>
    selectMultipleStorages(state, { storageIds })
  );

  const { showExpired } = useSelector((state) => state.pages.home);

  return { expiredProducts, storages, productsGroupedByStorages, showExpired };
};

export default useExpiredProducts;
