import { filterProductsBy, sortProductsBy } from "constantStrings";
import { useGroupProductsByStorages } from "hooks";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectProducts, makeSelectStorages } from "store/selectors";

const useCloseToExpiryProducts = () => {
  // select products that are close to being expired
  const selectCloseToExpiry = useMemo(makeSelectProducts, []);
  const productsCloseToExpiry = useSelector((state) =>
    selectCloseToExpiry(state, {
      closeToExpiry: true,
      sortBy: sortProductsBy.sortByExpDateAsc,
      filterBy: filterProductsBy.closeToExpiry,
      getProductBody: true,
    })
  );

  // group products by their storages
  const { storageIds, productsGroupedByStorages } = useGroupProductsByStorages(
    productsCloseToExpiry
  );

  // get storages from redux store
  const selectMultipleStorages = useMemo(makeSelectStorages, []);
  const storages = useSelector((state) =>
    selectMultipleStorages(state, { storageIds })
  );

  return { productsCloseToExpiry, storages, productsGroupedByStorages };
};

export default useCloseToExpiryProducts;
