import { useControlledActions, useIsDarkTheme } from "hooks";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectProductById, makeSelectStorageById } from "store/selectors";
import { getForDaysAhead, getToday } from "utils";

const useProduct = ({ productId }) => {
  const darkTheme = useIsDarkTheme();

  // select product
  const selectProductById = useMemo(makeSelectProductById, []);
  const product = useSelector((state) => selectProductById(state, productId));

  // select storage details
  const selectStorage = useMemo(makeSelectStorageById, []);
  const storage = useSelector((state) =>
    selectStorage(state, product.storageId)
  );

  // check if product is expired or close to be expired
  const { defaultNumberOfDaysForWarning } = useSelector((state) => state.app);

  const expirationDateTime = new Date(product?.expirationDate).getTime();

  const todaysTime = getToday().getTime();

  const numberOfDaysForWarning =
    storage?.numberOfDaysForWarning ?? defaultNumberOfDaysForWarning;

  const warningTime = getForDaysAhead(numberOfDaysForWarning).getTime();

  const closeToExpiry = !product?.expirationDate
    ? false
    : expirationDateTime >= todaysTime && expirationDateTime <= warningTime;

  const expired = !product?.expirationDate
    ? false
    : expirationDateTime < todaysTime;

  const { selectedAction, setSelectedAction, handleCloseAction } =
    useControlledActions();

  return {
    darkTheme,
    product,
    storage,
    closeToExpiry,
    expired,
    numberOfDaysForWarning,
    selectedAction,
    setSelectedAction,
    handleCloseAction,
  };
};

export default useProduct;
