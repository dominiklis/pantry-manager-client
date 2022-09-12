import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectProductById, makeSelectStorageById } from "store/selectors";
import { getForDaysAhead, getToday } from "utils";
import styles from "./Product.module.css";

const useProduct = ({
  productId,
  toggleShowContent,
  open,
  openAccordion,
  initiallyOpen,
}) => {
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") toggleShowContent();
  };

  useEffect(() => {
    if (open) openAccordion();
  }, [open]);

  const getContainerStyles = () => {
    let res = styles.container;

    if (initiallyOpen) res += ` ${styles.initallyOpen}`;

    return res;
  };

  return {
    product,
    storage,
    closeToExpiry,
    expired,
    numberOfDaysForWarning,
    handleKeyDown,
    getContainerStyles,
  };
};

export default useProduct;
